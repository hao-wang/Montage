from utils import get_node_type
from utils import is_node_list
from utils import is_single_node
from utils import list_dir
from utils import load_ast
from utils import pool_map
from utils.logger import print_msg
from utils.node import PROP_DICT
from utils.node import TERM_TYPE


def fragmentize(ast_path):
    """
    For each file, obtain it's fragments, frag_info_seq (what is it? why is it?), and node_types (what use?).

    :param ast_path:
    :return:
        file_name
        frag_seq:
        fraq_info_seq:
        node_types:
    """
    try:
        file_name, ast = load_ast(ast_path)
    except Exception as e:
        print_msg(str(e), 'WARN')
        return

    frag_seq, frag_info_seq, stack = [], [], []
    node_types = set()
    make_frags(ast, frag_seq, frag_info_seq,
               node_types, stack)
    return (file_name,
            frag_seq, frag_info_seq,
            node_types)


def main(pool, conf):
    ast_list = list_dir(conf.ast_dir)
    ast_data = pool_map(pool, fragmentize, ast_list)
    return ast_data


def make_edges(node, frag_seq, frag_info_seq,
               node_types, stack):
    node_type = get_node_type(node)

    for key in PROP_DICT[node_type]:
        if key not in node: continue

        node_types.add(node_type)
        # Append the node before visiting its children
        frag = dict()
        frag_idx = len(frag_seq)
        frag_seq.append(frag)

        # Push node info into the stack
        if len(stack) > 0:
            frag_info = stack.pop()
            frag_info_seq.append(frag_info)
        push(stack, node, frag_idx)

        child = node[key]

        # If it has a single child
        if (is_single_node(child) and
                get_node_type(child) not in TERM_TYPE):
            frag[(node_type, key)] = prune(child)
            make_edges(child, frag_seq, frag_info_seq,
                       node_types, stack)
        # If it has multiple children
        elif is_node_list(child):
            frag[(node_type, key)] = []
            for _child in child:
                if _child is None:
                    frag[(node_type, key)].append(None)
                elif get_node_type(_child) in TERM_TYPE:
                    frag[(node_type, key)].append(_child)
                else:
                    pruned_child = prune(_child)
                    frag[(node_type, key)].append(pruned_child)
                    make_edges(_child, frag_seq, frag_info_seq,
                               node_types, stack)
        # If it is a terminal
        else:
            frag[(node_type, key)] = node[key]

        # Append the fragment
        frag_seq[frag_idx] = frag


def make_frags(node, frag_seq, frag_info_seq,
               node_types, stack):
    # Append the node before visiting its children
    frag = dict()
    frag_idx = len(frag_seq)  #
    # pre-order depth-first traverse: add root first
    # cannot postpone -- need to increase frag_idx
    frag_seq.append(frag)

    # Push node info into the stack
    if len(stack) > 0:
        frag_info = stack.pop()
        frag_info_seq.append(frag_info)
    push(stack, node, frag_idx)

    node_type = get_node_type(node)
    node_types.add(node_type)

    for key in PROP_DICT[node_type]:
        if key not in node: continue
        child = node[key]

        # If it has a single child
        if (is_single_node(child) and
                get_node_type(child) not in TERM_TYPE):
            frag[key] = prune(child)
            make_frags(child, frag_seq, frag_info_seq,
                       node_types, stack)
        # If it has multiple children
        elif is_node_list(child):
            frag[key] = []
            for _child in child:
                if _child is None:
                    frag[key].append(None)
                elif get_node_type(_child) in TERM_TYPE:
                    frag[key].append(_child)
                else:
                    pruned_child = prune(_child)
                    frag[key].append(pruned_child)
                    make_frags(_child, frag_seq, frag_info_seq,
                               node_types, stack)
        # If it is a terminal (attributes without structure)
        else:
            # print("terminal: ", key, child)
            frag[key] = node[key]

    # Append the fragment -- redundant; can be deleted
    frag_seq[frag_idx] = frag
    return frag


def prune(node):
    return {'type': get_node_type(node)}


def push(stack, node, parent_idx):
    """
    Push the node's index, and its children's types into stack.
    The stack helps align the frag_info_seq[:] with frag_seq[1:], so that
    each frag in frag_seq knows its parent's id. When predict, we want not
    only the frag itself, but its type (the same as frag's type; so never
    mind) and its parent's type (idx).

    :param stack:
    :param node:
    :param parent_idx:
    :return:
    """
    node_type = get_node_type(node)
    for key in reversed(PROP_DICT[node_type]):
        if key not in node: continue
        child = node[key]

        # If it has a single child
        if (is_single_node(child) and
                get_node_type(child) not in TERM_TYPE):
            frag_type = get_node_type(child)
            frag_info = (parent_idx, frag_type)
            stack.append(frag_info)
        # If it has multiple children
        elif is_node_list(child):
            for _child in reversed(child):
                if (_child is not None and
                        get_node_type(_child) not in TERM_TYPE):
                    frag_type = get_node_type(_child)
                    frag_info = (parent_idx, frag_type)
                    stack.append(frag_info)
