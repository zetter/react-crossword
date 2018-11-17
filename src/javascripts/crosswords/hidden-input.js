import React, { Component } from 'react';

class HiddenInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: this.props.value,
        };
    }

    onClick(event) {
        this.props.crossword.onClickHiddenInput(event);
    }

    onKeyDown(event) {
        this.props.crossword.onKeyDown(event);
    }

    onBlur(event) {
        this.props.crossword.goToReturnPosition(event);
    }

    touchStart(event) {
        this.props.crossword.onClickHiddenInput(event);
    }

    handleChange(event) {
        this.props.crossword.insertCharacter(event.target.value);
        this.setState({
            value: '',
        });
    }

    render() {
        return (
            <div
                className="crossword__hidden-input-wrapper"
                ref={wrapper => {
                    this.wrapper = wrapper;
                }}>
                <input
                    type="text"
                    className="crossword__hidden-input"
                    maxLength="1"
                    onClick={this.onClick.bind(this)}
                    onChange={this.handleChange.bind(this)}
                    onTouchStart={this.touchStart.bind(this)}
                    onKeyDown={this.onKeyDown.bind(this)}
                    onBlur={this.onBlur.bind(this)}
                    value={this.state.value}
                    autoComplete="off"
                    spellCheck="false"
                    autoCorrect="off"
                    ref={input => {
                        this.input = input;
                    }}
                />
            </div>
        );
    }
}

export { HiddenInput };
