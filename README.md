# json-model-cli 
[![Build Status](https://www.travis-ci.org/shaop/json-model-cli.svg?branch=master)](https://www.travis-ci.org/shaop/json-model-cli)
> generate models in a simpler way

<img src="http://7xkl1p.com1.z0.glb.clouddn.com/model-json-cli.gif" width="376"/>

## Now 
json-model-cli supports for these model library

| extension  | library        |
| --------   | ---------      |
| .swift     | HandyJSON      |  
| .h         | JSONModel      |   
| .h         | MJExtension    |   
| .h         | YYModel        |   

## How

### install 

You need to install [node](https://nodejs.org) in advance, then: 

```bash
> npm install -g json-model-cli
```

### usage

Just put json into the file `.h` or `.swift`, then:

```bash
> jm -i ./filename.swift
```

It will generate a model.

json-model-cli supports some arguments, you could find it by:

```bash
> jm -h

  Usage: jm [options]

  Options:

    -V, --version         output the version number
    -i, --input <path>    input file (include .h .swift)
    -I, --input <path>    input file (include .h .swift)
    -e, --except [value]  input an array that requires ignore, list by "," (default: )
    -h, --help            output usage information
  Examples:

    $ jm -i ./test.h -e pic_infos
```

## License
json-model-cli is provided under the MIT license.
