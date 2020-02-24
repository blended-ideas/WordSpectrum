![Built With Stencil](https://img.shields.io/badge/-Built%20With%20Stencil-16161d.svg?logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI%2BCjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI%2BCgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU%2BCjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik00MjQuNywzNzMuOWMwLDM3LjYtNTUuMSw2OC42LTkyLjcsNjguNkgxODAuNGMtMzcuOSwwLTkyLjctMzAuNy05Mi43LTY4LjZ2LTMuNmgzMzYuOVYzNzMuOXoiLz4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTQyNC43LDI5Mi4xSDE4MC40Yy0zNy42LDAtOTIuNy0zMS05Mi43LTY4LjZ2LTMuNkgzMzJjMzcuNiwwLDkyLjcsMzEsOTIuNyw2OC42VjI5Mi4xeiIvPgo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNDI0LjcsMTQxLjdIODcuN3YtMy42YzAtMzcuNiw1NC44LTY4LjYsOTIuNy02OC42SDMzMmMzNy45LDAsOTIuNywzMC43LDkyLjcsNjguNlYxNDEuN3oiLz4KPC9zdmc%2BCg%3D%3D&colorA=16161d&style=flat-square)  
  
# Word Spectrum  
  
A tiny Web Component library built with Stencil to generate colorful text placeholders  🎨

Inspired by React Project by [react-spectrum](https://github.com/ganapativs/react-spectrum)

  
## Installation  

Node Modules (npm or yarn): Add the blendedideas/word-spectrum as dependency to node_modules via npm or yarn:

    # add dependency with npm:
    npm install @blendedideas/word-spectrum --save
    
    # or with yarn:
    $ yarn add @blendedideas/word-spectrum --save

then add the below line to your ``<head>`` of your index.html

``<script src='node_modules/wc-trombone/dist/wc-trombone.js'></script>``

or you can put the following tag in the ``<head>`` of your index.html and you can use the element anywhere in your application:

``<script src="https://unpkg.com/@blendedideas/word-spectrum@0.0.2/dist/wordspectrum.js"></script>``

---

## Usage Example:

    <spectrum-words 
        line-spacing="5" 
        word-colors='["#69626D","#BCAF9C","#CBBEB3","#D9BDC5","#E8C7DE"]' 
        word-widths='[80, 90, 100]'
        word-spacing="3" 
        word-height="10"
        word-radius="2"
        paragraph-length="[50, 60, 70]" 
        paragraph-count="3">
     </spectrum-words>
