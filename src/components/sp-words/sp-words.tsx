import {Component, h, Prop, Watch} from "@stencil/core";
import {getRandom} from "../../utils/utils";

@Component({
  tag: 'sp-word',
  styleUrl: 'sp-word.css',
  shadow: true
})
export class SpectrumWords {
  @Prop() lineSpacing: number = 4;
  @Prop() wordHeight: number = 12;
  @Prop() wordRadius: number = 10;
  @Prop() wordSpacing: number = 2;

  @Prop() wordWidths: number[] | string;
  private _wordWidths: number[] = [50, 60, 70];
  @Prop() wordColors: string[] | string;
  private _wordColors: string[] = ["#fddcb8", "#f8a2b6", "#f166b2", "#fafca0"];

  @Watch('wordColors')
  wordColorsWatcher(newValue: string[] | string) {
    if (typeof newValue === 'string') {
      this._wordColors = JSON.parse(newValue);
    } else {
      this._wordColors = newValue;
    }
  }

  @Watch('wordWidths')
  wordWidthsWatcher(newValue: string | number[]) {
    if (typeof newValue === 'string') {
      this._wordWidths = JSON.parse(newValue);
    } else {
      this._wordWidths = newValue;
    }
  }

  componentWillLoad() {
    if (this.wordColors) {
      this.wordColorsWatcher(this.wordColors);
    }
    if (this.wordWidths) {
      this.wordWidthsWatcher(this.wordWidths);
    }
  }

  render() {
    const wordStyle = {
      background: this._wordColors[getRandom(this._wordColors.length)],
      width: `${this._wordWidths[getRandom(this._wordWidths.length)]}px`,
      height: `${this.wordHeight}px`,
      'border-radius': `${this.wordRadius}px`,
      margin: `0 ${this.wordSpacing / 2}px ${this.lineSpacing}px ${this.wordSpacing / 2}px`
    };
    return <div style={wordStyle}/>;
  }
}
