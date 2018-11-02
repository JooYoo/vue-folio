<template>
	<div class="hello">
		<h1>{{ msg }}</h1>
	
		<div class="bg-info">
	
			<!-- mainNav -->
			<nav class="navbar navbar-expand-lg navbar-dark bg-transparent ">
	
				<!-- logo position -->
				<a class="navbar-brand" href="#"></a>
				<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
											            <span class="navbar-toggler-icon"></span>
					</button>
				<div class="collapse navbar-collapse" id="navbarText">
					<ul class="navbar-nav mr-auto">
						<li class="nav-item active">
							<a class="nav-link" href="#home">Home <span class="sr-only">(current)</span></a>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="#projects">Projects</a>
						</li>
	
					</ul>
	
				</div>
	
			</nav>
	
			<header>
	
	
			
	
	
	
				<nav id="scrolling-nav" v-scroll-spy-active v-scroll-spy-link class="navbar navbar-expand-lg fixed-top">
	
					<ul class="ml-auto">
	
						<li class="nav-item">
				          <a class="nav-link btn btn-outline-dark btn-circle" href="#about"></a>
						</li>
	
						<li class="nav-item">
							
				              <a class="nav-link btn btn-outline-dark btn-circle" href="#services"></a>
											
						</li>
	
						<li class="nav-item">
							
																							                  
				              <a class="nav-link btn btn-outline-dark btn-circle" href="#contact"></a>
							
						</li>
	
						<li class="nav-item">
				              <a class="nav-link btn btn-outline-dark btn-circle" href="#test"></a>
						</li>

							<li class="nav-item">
				              <a class="nav-link btn btn-outline-dark btn-circle" href="#timeline"></a>
						</li>
	
					</ul>
	
				</nav>


	
				<div class="container text-center text-white">
					<h1>Welcome to Scrolling Nav</h1>
					<p class="lead">A landing page template freshly redesigned for Bootstrap 4</p>
				</div>
	
			</header>
	
		</div>



		<main>

			<div>
    <v-btn color="success">Success</v-btn>
    <v-btn color="error">Error</v-btn>
    <v-btn color="warning">Warning</v-btn>
    <v-btn color="info">Info</v-btn>
  </div>

<div v-scroll-spy>
			
		
	
		<section id="about" class="section hero is-primary is-fullheight">
			<div class="container">
				<div class="row">
					<div class="col-lg-8 mx-auto">
						<h2>About this page</h2>
						<p class="lead">This is a great place to talk about your webpage. This template is purposefully unstyled so you can use it as a boilerplate or starting point for you own landing page designs! This template features:</p>
						<ul>
							<li>Clickable nav links that smooth scroll to page sections</li>
							<li>Responsive behavior when clicking nav links perfect for a one page website</li>
							<li>Bootstrap's scrollspy feature which highlights which section of the page you're on in the navbar</li>
							<li>Minimal custom CSS so you are free to explore your own unique design options</li>
						</ul>
					</div>
				</div>
			</div>
		</section>
	
		<section id="services" class="section hero is-primary is-fullheight bg-light">
			<div class="container">
				<div class="row">
					<div class="col-lg-8 mx-auto">
						<h2>Services we offer</h2>
						<p class="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut optio velit inventore, expedita quo laboriosam possimus ea consequatur vitae, doloribus consequuntur ex. Nemo assumenda laborum vel, labore ut velit dignissimos.</p>
					</div>
				</div>
			</div>
		</section>
	
		<section id="contact" class="section hero is-primary is-fullheight">
			<div class="container">
				<div class="row">
					<div class="col-lg-8 mx-auto">
						<h2>Contact us</h2>
						<p class="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero odio fugiat voluptatem dolor, provident officiis, id iusto! Obcaecati incidunt, qui nihil beatae magnam et repudiandae ipsa exercitationem, in, quo totam.</p>
					</div>
				</div>
			</div>
		</section>
	
		<section id="test" class="section hero is-primary is-fullheight">
			<div class="container">
				<div class="row">
					<div class="col-lg-8 mx-auto">
						<h2>test us</h2>
						<p class="lead">test test testjfkjdklfjkdls;jakl;jfdsa</p>
					</div>
				</div>
			</div>
		</section>

		<section id="timeline" class="section hero is-primary is-fullheight">
			<div class="container">
				<div class="row">
					<div class="col-lg-8 mx-auto">
						 <v-timeline>
    <v-timeline-item
      v-for="n in 4"
      :key="n"
      color="red lighten-2"
      large
    >
      <span slot="opposite">Tus eu perfecto</span>
      <v-card class="elevation-2">
        <v-card-title class="headline">Lorem ipsum</v-card-title>
        <v-card-text>
          Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.
        </v-card-text>
      </v-card>
    </v-timeline-item>
  </v-timeline>
					</div>
				</div>
			</div>
		</section>

		</div>
		</main>
	
		<!-- Footer -->
		<footer class="py-5 bg-dark">
			<div class="container">
				<p class="m-0 text-center text-white">Copyright &copy; Your Website 2017</p>
			</div>
			<!-- /.container -->
		</footer>
	
	</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import jQuery from "jquery";
let $ = jQuery;

@Component
export default class HelloWorld extends Vue {
  @Prop()
  private msg!: string;
}
</script>


<style scoped>
header {
  padding: 240px 0 240px;
}

@media (min-width: 992px) {
  header {
    padding: 240px 0 240px;
  }
}

.navbar-brand {
  margin-left: 10px;
}

.nav-item {
  margin-top: 12px;
  margin-left: 15px;
}

#navbarText {
  margin-left: 160px;
}

#scrolling-nav {
  margin-top: 370px;
  margin-right: 40px;
  color: black;
}

a {
  color: black;
}

section {
  padding: 150px 0;
}

ul {
  list-style-type: none;
}

.btn-circle {
  width: 11px;
  height: 11px;
  padding: 5px 5px;
  border-radius: 15px;
  text-align: center;
  font-size: 10px;
  line-height: 1.42857;
  border: 2px solid black;
}
</style>
