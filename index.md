---
layout: home
title: Cześć
permalink: /
lang: pl
---
{% assign lang = page.lang %}
<div class="section-title">
  <h1>{% if lang == "pl" %}
    O nas {% else %} 
    About {% endif %}</h1>
</div>
<div class="paragraph">
  <div class="container">
    {% if lang == "pl" %}
    {{ site.data.home.pl.about.about}} {% else %}
    {{ site.data.home.en.about.about}} {% endif %}
  </div>
  <div class="container tiles">
    {%- assign hashtags_pl = site.data.home.pl.about.hashtags -%}
    {%- assign hashtags_en = site.data.home.en.about.hashtags -%}
    {% if lang == "pl" %}
    {%- if hashtags_pl -%}
    {%- for hashtag in hashtags_pl -%}
    <div class="tile">{{hashtag}}</div>
    {%- endfor -%}
    {%- endif -%}
    {% else %}
    {%- if hashtags_en -%}
    {%- for hashtag in hashtags_en -%}
    <div class="tile">{{hashtag}}</div>
    {%- endfor -%}
    {%- endif -%}
    {%- endif -%}
  </div>
</div>
<div class="paragraph">
  <div class="container">
    <div class="tabs-navigation">
      <button class="tab-btn active" data-group="board">{% if lang == "pl" %}
        Zarząd {% else %} 
        Management Board {% endif %}</h1></button>
      <button class="tab-btn" data-group="committee">{% if lang == "pl" %}
        Komisja Rewizyjna {% else %} 
        Audit Committee {% endif %}</h1></button>
    </div>

    <div class="row">
      {%- assign team = site.data.team -%}
      {%- for member in team -%}
            <div class="column card" data-group="{{ member.group }}">
        <div class="team">
          <div class="team-img">
            <img src="{{ member.img }}" alt="{{ member.name }} Image">
          </div>
          <div class="team-content">
            {% if lang == "pl" %}
            <h2>{{ member.name }}</h2>
            <h3>{{ member.pl.title }}</h3>
            {% else %}
            <h2>{{ member.name }}</h2>
            <h3>{{ member.en.title }}</h3>
            {%- endif -%}
          </div>
          <div class="team-overlay">
            {% if lang == "pl" %}
            <p>{{ member.pl.bio }}</p>
            {% else %}
            p>{{ member.en.bio }}</p>
            {%- endif -%}
          </div>
        </div>
      </div>
      {%- endfor -%}
    </div>
  </div>
</div>
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script>
  $(document).ready(function () {
    // Initial setup: show the Board group by default
    showGroup('board');

    // Handle tab button click
    $('.tab-btn').on('click', function () {
      const group = $(this).data('group');
      showGroup(group);
    });

    function showGroup(group) {
      // Hide all columns
      $('.column').removeClass('active');

      // Show only columns with the selected group
      $(`.column[data-group="${group}"]`).addClass('active');
    }
  });
</script>
<style>
    ////////// ---- ABOUT ----- /////////

.container.tiles {
  display: flex;
  justify-content: left
}

.tile {
  margin: 8px;
  padding: 10px;
  border-radius: 8px;
  font-weight: $bold-weight;
  opacity: 0.7;

  &:before {
    content: "\23";
    font-family: FontAwesome;
    margin-right: 5px;
  }

  &:hover {
    opacity: 1;
  }
}

.team {
  padding: 20px;
  margin-bottom: 30px;
  border-radius: 5px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: transform 0.6s;
  transform-style: preserve-3d;
  align-items: center;
}

.team:hover {
  transform: rotateY(180deg);
}

.team .team-img {
  position: relative;
  font-size: 0;
  text-align: center;
  margin-bottom: 30px;
}

.team .team-img img {
  width: 100%;
  height: auto;
  border-radius: 100%;
}

.team .team-content {
  text-align: center;
  align-items: center;
}

.team .team-content h2 {
  font-size: 100%;
  font-weight: 700;
  letter-spacing: 2px;
  margin-bottom: 5px;
}

.team .team-content h3 {
  font-size: 16px;
  font-weight: 400;
  margin-bottom: 0;
}

.team .team-overlay {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: justify;
  flex-direction: column;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  background: $white;
  border-radius: 5px;
  transform: rotateY(180deg);
}

.team .team-overlay p {
  font-size: $medium-font-size;
  text-align: justify;
}

.tab-btn {
  padding: 10px;
  margin: 20px;
  cursor: pointer;
  background: transparent;
  border-radius: 5px;
  border: 2px solid $text-base-color;
  font-family: $font-family;
  color: $text-base-color;
  font-weight: $bold-weight;
  opacity: 0.7;
  &:hover{
    opacity: 0.9;
  }
}

.tab-btn.active {
  color: $white;
  border: 0;
  background: $text-base-color;
  transition: all 0.3s ease;
  opacity: 0.9;
}

.column.card {
  display: none;
  opacity: 0.9;
}

/* Show only columns with the selected group */
.column.card.active {
  display: block;
  opacity: 1;
}

.tabs-navigation {
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
}

////////// ---- WHAT WE DO ----- /////////

.category {
  padding: 20px;
  border-radius: 5px;
  align-items: center;
  opacity: 0.7;

  &:hover {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    opacity: 1;

  }
}

.category .category-content,
.category .thumb-icon {
  text-align: center;
  align-items: center;
  transition: all 1s ease-in 
}

.category a {
  color: $text-base-color
}

.thumb-icon {
  font-size: 27px;
  padding-bottom: 10px;
}

////////// ---- DONATE ----- /////////

.donate-button {
  padding: 20px;
  margin-bottom: 30px;
  border: 0;
  background: transparent;
  border-radius: 5px;
  align-items: center;
  opacity: 0.7;
  text-transform: capitalize;
  font-family: $font-family;
  font-size: $large-font-size;

  &:hover {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    opacity: 1;

  }

  a {
    color: $dark-text-base-color;
  }
}

.container.donate {
  text-align: center;
  align-items: center;
  color: $light
}

.category-content h3 {
  font-size: $medium-font-size;
  font-weight: $normal-weight;
}

.category.support {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  min-height: 250px;
  cursor: pointer;
  background: transparent;
  border: 0;
  font-family: $font-family;
}

.category-content.description {
  display: none;
  visibility: hidden;
  transition: opacity 0.3s ease, visibility 0.3s ease;
}

.category-content.description.active {
  display: block;
  opacity: 1;
  visibility: visible; 
  transition: opacity 0.3s ease, visibility 0.3s ease;}

.support-notification {
  position: absolute;
  color: $red;
  font-size: $medium-font-size;
}
</style>


