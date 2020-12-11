import glob
import os
import random


def copy_files(n=1000):
    files = glob.glob(os.path.join(cwd_dir, "*"))
    random.seed(42)
    picked = random.sample(files, n)
    print("num of picked: ", len(picked))

    all_dependencies = []
    for pf in picked:
        dependencies = []
        get_dependency(pf, dependencies)
        all_dependencies.extend(dependencies)

    print("num of dependencies: ", len(set(all_dependencies)))

    all_files = sorted(list(set(all_dependencies + picked)))
    for af in all_files:
        os.system("cp %s testsuite-mini/" % af)


def get_dependency2(file, dependencies):
    with open(file, 'r') as fr:
        for line in fr:
            if line.startswith('load'):
                fn = line[6:-4]
                if fn.endswith('.js'):
                    fpath = os.path.join(cwd_dir, fn)
                    dependencies.append(fpath)
                    #get_dependency(fpath, dependencies)
            else:
                break


def get_dependency(file, dependencies):
    with open(file, 'r') as fr:
        for line in fr:
            if line.startswith('load'):
                fn = line[6:-4]
                if fn.endswith(".js") and '(' not in fn:
                    print(fn)
                    fpath = os.path.join(cwd_dir, fn)
                    dependencies.append(fpath)
                    get_dependency(fpath, dependencies)
            else:
                break


if __name__ == "__main__":
    cwd_dir = "/Users/hwang/Projects/Montage/js-test-suite/testsuite"
    src = copy_files(n=1000)