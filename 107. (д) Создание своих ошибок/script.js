'use strict';

const data = [
    {
        id: 'box',
        tag: 'div'
    },
    {
        id: '',
        tag: 'nav'
    },
    {
        id: 'circle',
        tag: 'span'
    }
];


try {
    data.forEach((blockObj, i) => {
        const block = document.createElement(blockObj.tag);

        //Допустим мы хотим получить ошибку, если id у объекта нет
        if (!block.id) {
            throw new ReferenceError(`В данных под номером ${i + 1} нет id`);
        }

        block.setAttribute('id', blockObj.id);
        document.body.append(block);
    });

} catch (error) {
    if (error.name === 'TypeError') {
        console.log(error.message);
    } else {
        console.log('wtf');//допустим одну ошибку предвидели, а другую нет
        throw error;
    }
}


let err = new Error('bfbfb');
console.log(err);
// console.log(err.name);
// console.log(err.message);
// console.log(err.stack);
// err = SyntaxError('la');
// console.log(err);
// console.log(err.name);
// console.log(err.message);
// console.log(err.stack);