import argparse
import os
import sys
import torch

from utils.config import Config
from utils.logger import print_msg
from utils import make_dir


def build_map(conf):
    from utils.map import build_id_map
    build_id_map(conf)


def exec_fuzz(conf):
    if not os.path.exists('fuzz/id_map.py'):
        print_msg('Please build a map for identifiers predefined in the harness files first.',
                  'ERROR')
        sys.exit(1)

    from fuzz.fuzz import fuzz
    fuzz(conf)


def exec_preprocess(conf):
    from preprocess.preprocess import Preprocessor
    preprocessor = Preprocessor(conf)
    preprocessor.preprocess()


def exec_train(conf):
    from train.train import ModelTrainer
    trainer = ModelTrainer(conf)
    trainer.train()


def get_args():
    arg_parser = argparse.ArgumentParser()
    arg_parser.add_argument('--opt', required=True,
                            choices=['preprocess', 'train', 'fuzz', 'build_map', 'generate'])
    arg_parser.add_argument('--config', required=True)
    return arg_parser.parse_args(sys.argv[1:])


def main():
    # Increase max recursion depth limit
    sys.setrecursionlimit(10000)

    args = get_args()
    config_path = args.config
    conf = Config(config_path)

    if args.opt == 'preprocess':
        exec_preprocess(conf)
    elif args.opt == 'train':
        exec_train(conf)
    elif args.opt == 'build_map':
        build_map(conf)
    elif args.opt == 'fuzz':
        make_dir(conf.bug_dir)
        exec_fuzz(conf)
    elif args.opt == 'generate':
        conf.no_fuzz = True
        make_dir(conf.bug_dir)
        exec_fuzz(conf)


if __name__ == '__main__':
    main()
