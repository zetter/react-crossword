import React from 'react';
import { render } from 'react-dom';
import bean from 'bean';
import fastdom from 'lib/fastdom-promise';
import $ from 'lib/$';
import Crossword from 'crosswords/crossword';

const initCrosswords = () => {
    fastdom
        .read(() => document.getElementsByClassName('js-crossword'))
        .then(elements => {
            [...elements].forEach(element => {
                const data = element.getAttribute('data-crossword-data');

                if (!data) {
                    throw new Error(
                        'JavaScript crossword without associated data in data-crossword-data'
                    );
                }

                const crosswordComponent = render(
                    <Crossword data={JSON.parse(data)} />,
                    element
                );
            });
        });
};

export { initCrosswords };
