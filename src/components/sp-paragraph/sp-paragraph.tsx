import {Component, h, Prop, Watch} from "@stencil/core";
import {getRandom} from "../../utils/utils";

@Component({
  tag: 'sp-paragraph',
  styleUrl: 'sp-paragraph.css',
  shadow: true
})
export class SpectrumWords {
  @Prop() lineSpacing: number;
  @Prop() wordHeight: number;
  @Prop() wordSpacing: number;
  @Prop() wordRadius: number;
  @Prop() wordWidths: number[] | string;
  @Prop() wordColors: string[] | string;

  @Prop() paragraphCount: number = 2;
  private _paragraphLength: number[];
  @Prop() paragraphLength: number[] | string= [50, 60, 70];

  @Watch('paragraphLength')
  paragraphLengthWatcher(newValue: number[] | string) {
    if (typeof newValue === 'string') {
      this._paragraphLength = JSON.parse(newValue);
    } else {
      this._paragraphLength = newValue;
    }
  }

  componentWillLoad() {
    if (this.paragraphLength) {
      this.paragraphLengthWatcher(this.paragraphLength);
    }
  }


  private getWords() {
    const paragraphLen = this._paragraphLength[getRandom(this._paragraphLength.length)];
    return Array(paragraphLen).fill(0).map(() => (
      <sp-word
        line-spacing={this.lineSpacing}
        word-height={this.wordHeight}
        word-radius={this.wordRadius}
        word-spacing={this.wordSpacing}
        word-widths={this.wordWidths}
        word-colors={this.wordColors}
      />
    ));
  };

  render() {
    return <div class="paragraph">{this.getWords()}</div>;
  }
}
