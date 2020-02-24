import {Component, h, Prop} from '@stencil/core';

@Component({
  tag: 'spectrum-words',
  styleUrl: 'spectrum-words.css',
  shadow: true
})
export class SpectrumWords {
  @Prop() lineSpacing: number;
  @Prop() wordHeight: number;
  @Prop() wordSpacing: number;
  @Prop() wordRadius: number;
  @Prop() wordWidths: number[] | string;
  @Prop() wordColors: string[] | string;

  @Prop() paragraphCount: number;
  @Prop() paragraphLength: number[] | string;


  render() {
    return (
      <div>
        {this.getParagraphs()}
      </div>
    );
  }


  private getParagraphs() {
    return Array(this.paragraphCount).fill(0).map(() => (
      <sp-paragraph line-spacing={this.lineSpacing}
                    word-height={this.wordHeight}
                    word-spacing={this.wordSpacing}
                    word-widths={this.wordWidths}
                    word-radius={this.wordRadius}
                    word-colors={this.wordColors}
                    paragraph-count={this.paragraphCount}
                    paragraph-length={this.paragraphLength}
      />
    ));
  }

}
