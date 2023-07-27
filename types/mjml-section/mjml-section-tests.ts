import MjSection = require('mjml-section');
import { registerComponent } from 'mjml-core';

class TestSection extends MjSection {
    render() {
        return this.renderMJML('<mj-text>hello world</mj-text');
    }
}

registerComponent(TestSection);
