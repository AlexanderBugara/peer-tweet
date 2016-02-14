import React, { Component } from 'react';
var bencode = require('bencode')
var JSONB = require('json-buffer')
import { DhtStore, dht, opts} from '../api/DhtStore'
import SkipList from './SkipList'
import Topbar from './Topbar'

export default class Timeline extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <Topbar />
        <div className="tweets">
          <SkipList />
        </div>
      </div>
    );
  }
}