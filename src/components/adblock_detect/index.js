import React, { Component } from 'react';
import AdBlockDetect from 'react-ad-block-detect';
import Modal from '../modal/index'

export default class AdBlockDetectComponent extends Component {
    render() {
        return (
            <AdBlockDetect>
                <Modal />
            </AdBlockDetect>
        );
    }
}