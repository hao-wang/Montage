Forked from WSP-LAB/Montage, with the following modifications:
1. modified loss function to get more versatile model outputs 
1. added "generate" mode to generate .js files without fuzzing
1. various minor changes, non-gpu mode, test_frac, etc.

Tested with python 3.8.

Installation:
1. Code-to-AST needs Esprima, and AST-to-Code Escodegen. In case of getting no output at all: try installing the above packages inside Mongage/ (the project root), as well as src/.
```
npm install esprima@4.0.0 escodegen@1.9.1
```

2. Install pytorch with conda.
```
conda install pytorch torchvision -c pytorch
```

3. To fuzz against ChakraCore, download ChakraCore bin file from: https://github.com/microsoft/ChakraCore/releases

4. To generate js files: Check out src/driver.ipynb

Possible problems:
- Ref: https://stackoverflow.com/questions/54536539/unicodeencodeerror-utf-8-codec-cant-encode-character-ud83d-in-position-38

# Montage

Montage is a JavaScript (JS) engine fuzzer that mutates a seed JS abstract
syntax tree (AST) by leveraging a neural network language model. The model is
trained on a set of JS regression tests to learn the underlying commonalities of
the JS tests that previously triggered JS engine bugs. Thus, Montage aims to
mutate a seed AST such that the resulting AST reflects the commonalities of the
trained JS tests. The key intuition behind our approach is that a JS code
similar to the previous bug-triggering JS code may trigger another bug. For more
details, please refer to our [paper](https://leeswimming.com/papers/lee-sec20.pdf),
"Montage: A Neural Network Language Model-Guided JavaScript Engine Fuzzer",
which appeared in USENIX Security 2020.

## Installation
Montage works on a machine running Linux with NVIDIA graphic cards. It is tested
on a machine running Ubuntu 20.04 with GTX Titan XP GPUs. Python 3.8 and PyTorch
1.4.0 with CUDA are required to run Montage. Please refer to (1) this
[link](https://pytorch.org/get-started/previous-versions/) for installing
PyTorch and (2) this [link](https://developer.nvidia.com/cuda-toolkit-archive)
for installing CUDA Toolkits. We currently support ChakraCore, V8, SpiderMonkey,
and JavaScriptCore. To get ready for running Montage, please additionally run
the following commands:
```
$ sudo apt update
$ sudo apt install nodejs npm
$ npm install esprima@4.0.0 escodegen@1.9.1
$ git clone https://github.com/WSP-LAB/Montage
$ cd Montage
$ pip3 install -r requirements.txt
```
## Dataset

We provide dataset used in our experiments (Sec. 7.2-7.5) in this
[repository](https://github.com/WSP-LAB/js-test-suite).

## Usage

### Configuration file
Please refer to this [link](https://github.com/WSP-LAB/Montage/blob/master/conf/README.md)
for writing a configuration file.

### Phase I

Phase I parses each JS file into an AST and then divides the AST into fragments.
As a result, Montage represents each JS code as a sequence of fragments on which
a neural network language model is trained.

```
$ cd Montage/src
$ python3 main.py --opt preprocess --config CONFIG_PATH
```

### Phase II
Phase II trains an LSTM model on the fragment sequences obtained from Phase I.
```
$ cd Montage/src
$ python3 main.py --opt train --config CONFIG_PATH
```
#### Caveat
We re-engineered Montage so that a single graphic card could be enough for
training the model. However, if you see an error message saying `RuntimeError:
CUDA out of memory`, you need carefully adjust the configuration file such that
it fits the memory size of your graphic card.

### Phase III
Phase III produces new JS tests by leveraging the trained LSTM model and logs
whether they elicit bugs from JS engines. Before running Phase III, you need to
build a map for identifiers predefined in the harness files.
```
$ cd Montage/src
$ python3 main.py --opt build_map --config CONFIG_PATH
$ python3 main.py --opt fuzz --config CONFIG_PATH
```

## Authors
This research project has been conducted by [WSP Lab](https://wsp-lab.github.io)
and [SoftSec Lab](https://softsec.kaist.ac.kr) at KAIST.

* [Suyoung Lee](https://leeswimming.com/)
* [HyungSeok Han](https://daramg.gift/)
* [Sang Kil Cha](https://softsec.kaist.ac.kr/~sangkilc/)
* [Sooel Son](https://sites.google.com/site/ssonkaist/home)

## Citation
To cite our paper:
```bibtex
@INPROCEEDINGS{lee:usenixsec:2020,
  author = {Suyoung Lee and HyungSeok Han and Sang Kil Cha and Sooel Son},
  title = {{Montage}: A Neural Network Language Model-Guided {JavaScript} Engine Fuzzer},
  booktitle = {Proceedings of the {USENIX} Security Symposium},
  pages = {2613--2630},
  year = 2020
}
```
