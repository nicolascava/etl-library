# Node Bencode

> Takes a bencoded string as an input to output the corresponding converted types
> ❌ Sorry, but this library is no longer maintained. Please find an alternative.

## Getting started

Install NVM:
```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.37.2/install.sh | bash
```

Install Node.js v15.5.0:
```
nvm install 15.5.0
```

## Execute

```
node ./src/index.js
```

From this bencoded input:
```
36:Cyberpunk is a nice but broken game.l6:johnnyi2077eed5:error30:Cars are flying over buildings4:codei442ee
```

It should output:
```
Cyberpunk is a nice but broken game.
["johnny",2077]
{"error":"Cars are flying over buildings","code":442}
```

## License

The MIT License (MIT)

Copyright (c) 2021 Nicolas Cava

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
