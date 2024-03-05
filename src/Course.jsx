import React from 'react'

export const Course = ({image,title,desc}) => {
  return (
    <>
    <div class="card">
    <div class="card-image">
        <figure class="image is-4by3">
        <img src={image} alt="Placeholder image" />
        </figure>
    </div>
    <div class="card-content">
        <div class="media">
        <div class="media-left">
            <figure class="image is-48x48">
            <img src={image} alt="Placeholder image" />
            </figure>
        </div>
        <div class="media-content">
            <p class="title is-4">{title}</p>
            <p class="subtitle is-6">@johnsmith</p>
        </div>
        </div>

        <div class="content">
        {desc} <a>@X</a>.
        <a href="#">#Sale</a> <a href="#">#Sales</a>
        <br />
        <time datetime="2016-1-1">11:09 PM - 5 March 2024</time>
        </div>
    </div>
    </div>
    </>
  )
}
