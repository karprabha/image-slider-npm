# Image Slider

## Description

Image Slider is a module that allows you to create an image carousel or slider on your website. It provides a user-friendly and interactive way to showcase a collection of images in a slideshow format.

## Installation

You can install Image Slider using npm:

```bash
npm install @karprabha/image-slider
```

## Usage

### Script Tag:

Include the Image Slider script in your HTML file using a script tag:

```html
<script src="{root dir}/node_modules/@karprabha/image-slider/dist/image-slider.js"></script>
<script>
    imageSlider();
</script>
```

Make sure to adjust the {root dir} placeholder with the appropriate path to your project's root directory.

### JavaScript File:

Alternatively, you can import and use Image Slider in your JavaScript file:

```javascript
import imageSlider from "@karprabha/image-slider";
imageSlider();
```

## CSS Classes

To make the image-slider functional, apply the following CSS classes to your html structure:

```html
<div class="slider">
    <!-- Add your image slides here  -->
    <!-- Slide 1 -->
    <div class="slide">
        <img src="https://pn-sumedang.go.id/tidak_ada_gambar.jpg" alt="tmp" />
    </div>

    <!-- Slide 2 -->
    <div class="slide">
        <img src="https://pn-sumedang.go.id/tidak_ada_gambar.jpg" alt="tmp" />
    </div>

    <button type="button" class="btn-nav btn-prev">&lt;</button>
    <button type="button" class="btn-nav btn-next">&gt;</button>
</div>
```
