---
layout: layout.liquid
---
<aside class="sidebar">
    <div class="sidebar-header">
        <img alt="Pooja Rao" class="profile-image" src="/assets/pooja-rao.jpg"/>
        <h1 class="profile-name">Pooja Rao</h1>
        <p class="profile-title">PhD Researcher</p>
        <div class="social-links">
            <ul class="contact">
                        <li class="p-1"><a title="Contact me via Email" href="mailto:pooja.rao@unil.ch"><img src="https://raw.githubusercontent.com/poorao/portfolio/master/assets/mail.png" alt="unil email address"></a></li>
                        <li class="p-1"><a title="Follow me on twitter" target="_blank" href="https://twitter.com/poojaraosb"><img src="https://raw.githubusercontent.com/poorao/portfolio/master/assets/twitter.png" alt="pooja rao shikaripur bheemasena rao on twitter"></a></li>
                        <li class="p-1"><a title="Connect with me on Github" target="_blank" href="https://github.com/poorao"><img src="https://raw.githubusercontent.com/poorao/portfolio/master/assets/github.png" alt="pooja rao shikaripur bheemasena rao on github"></a></li>
                        <li class="p-1"><a title="Connect with me on LinkedIn" target="_blank" href="https://www.linkedin.com/in/pooja-rao"><img src="https://raw.githubusercontent.com/poorao/portfolio/master/assets/linkedin.png" alt="pooja rao shikaripur bheemasena rao on linked in"></a></li>
            </ul>
        </div>
    </div>
    <nav class="sidebar-nav">
        <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#updates">Updates</a></li>
            <li><a href="#publications">Publications</a></li>
            <li><a href="#master-thesis">Master Thesis</a></li>
        </ul>
    </nav>
</aside>

<main class="main-content">
    <section id="about">
        <div class="card">
            <h2 class="card-title">
                About
            </h2>
            <div class="prose">
                {% include "sections/about.md" | markdownify %}
            </div>
        </div>
    </section>
     <section id="updates">
        <div class="card">
            <h2 class="card-title">
                Updates
            </h2>
            {% include "sections/updates.md" | markdownify %}
        </div>
    </section>
    <section id="publications">
        <div class="card">
            <h2 class="card-title">
                Publications
            </h2>
            <ul>
                {% include "sections/publications.md" | markdownify %}
            </ul>
        </div>
    </section>
    <section id="master-thesis">
        <div class="card">
            <h2 class="card-title">
                Master Thesis
            </h2>
            {% include "sections/thesis.md" | markdownify %}
        </div>
    </section>
</main>
