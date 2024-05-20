const xml2js = require('xml2js');

const obj = {
    response: {
        $: {
            xmlns: 'response'
        },
        data1: [
            {
                test1: 123,
                test2: 'test'
            },
            {
                test1: 321,
                test2: 'test31'
            }
        ],
        data2: {
            test1: 312,
            test2: {
                $: {
                    attr: 'attr1'
                },
                _: 'val1'
            },
            array: [1,2,3,4,5,6]
        }

    }
};


const builder = new xml2js.Builder({ xmldec: { version: '1.0', encoding: 'UTF-8' } });

console.log(builder.buildObject(obj));
