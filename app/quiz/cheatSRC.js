"use strict"; 
let jsCheat = (function () {
    // Object.assign MDN's Polyfill
    if (typeof Object.assign != 'function') {
        Object.assign = function (target, varArgs) { // .length of function is 2
            'use strict';
            if (target == null) { // TypeError if undefined or null
                throw new TypeError('Cannot convert undefined or null to object');
            }

            var to = Object(target);

            for (var index = 1; index < arguments.length; index++) {
                var nextSource = arguments[index];

                if (nextSource != null) { // Skip over if undefined or null
                    for (var nextKey in nextSource) {
                        // Avoid bugs when hasOwnProperty is shadowed
                        if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
                            to[nextKey] = nextSource[nextKey];
                        }
                    }
                }
            }
            return to;
        };
    }
    const controller = new AbortController();
    const addDebugWindow = () => {
        const debugWindow = document.createElement('div');
        debugWindow.id = 'js-cheat-debug-window';
        const debugWindowStyles = {
            position: 'absolute',
            right: '20px',
            bottom: '20px',
            background: 'rgba(165, 165, 165, 0.5)',
            borderRadius: '5px',
            padding: '20px',
        }
        debugWindow.innerText = 'Waiting for the user\'s first input';

        Object.assign(debugWindow.style, debugWindowStyles);
        if (document.body !== null) {
            document.body.appendChild(debugWindow);
        }

    };

    const rerenderDebugWindow = (currentKey, userInputArray, secretCode) => {
        const userInputString = userInputArray.join('');
        const debugWindow = document.getElementById('js-cheat-debug-window');
        debugWindow.innerHTML = `<strong>Secret Code:</strong> ${secretCode}<br /><strong>Last key:</strong> ${currentKey}<br /><strong>Keys chain:</strong> ${userInputString}`;
    };

    const compareArrays = (arrayOne, arrayTwo) => {
        if (arrayOne.length && arrayTwo.length && arrayOne.length === arrayTwo.length) {
            for (let i = 0; i < arrayOne.length; i++) {
                if (arrayOne[i].toLowerCase() !== arrayTwo[i].toLowerCase()) {
                    return false;
                }
            }
            return true;
        }
    };

    const compareStringAgainstCode = (str, code) => {
        if (typeof str === 'string' && typeof code === 'string' && str.toLowerCase() === code.toLowerCase()) {
            return true;
        }
        return false;
    };

    const defaultCallback = () => {
        console.log('Code actived!');
    };

    const init = optionsObject => {
        if (!optionsObject || optionsObject.constructor !== Object) {
            throw (new Error('Init argument is not an object'));
        } else if (!optionsObject.hasOwnProperty('code') || !optionsObject.code) {
            throw (new Error('You have to pass an cheat code'));
        } else if (!optionsObject.callback && !optionsObject.debug) {
            throw (new Error('Missing callback function that runs after correct code is used'));
        } else if (document.body === null) {
            throw (new Error('You need to initialize library in body tag'))
        }

        const options = {
            code: optionsObject.code,
            callback: optionsObject.callback || defaultCallback,
            debug: optionsObject.debug || false,
        }

        if (options.debug) {
            addDebugWindow();
        }

        const codeLength = options.code.length;
        let userInputArray = [];

        window.addEventListener('keyup', (event) => {
            userInputArray.push(event.key);
            userInputArray = userInputArray.slice(-codeLength);

            if (options.debug) {
                rerenderDebugWindow(event.key, userInputArray, options.code);
            }

            if (Array.isArray(options.code) && compareArrays(userInputArray, options.code) || compareStringAgainstCode(userInputArray.join(''), options.code)) {
                options.callback();
            }
        }, { signal: controller.signal });
    };

    return {
        init,
        controller
    }
})();
export default jsCheat;