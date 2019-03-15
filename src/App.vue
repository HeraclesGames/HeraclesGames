<template>
  <div id="app">
    <div id="nav">
      <router-link to="/"><img class="logo" src="https://github.com/HeraclesGames/HeraclesGames/raw/master/src/assets/logo-notextwhite.png" alt="logo"> </router-link> 
      <router-link to="/"> Home </router-link> 
      <router-link to="/games">Games </router-link> 
      <router-link to="/info">Info </router-link>
      <router-link to="/contact">Contact</router-link>
    </div>

		<img src="" alt="">
    <router-view />
    
		<footer class="footer-distributed">

			<div class="footer-left">

				<h3><img class="logo-footer" src="https://github.com/HeraclesGames/HeraclesGames/raw/master/src/assets/logo-sidewhite.png"></h3>
			
				<div class="footer-link-container">
					<p class="footer-links">
						<span style="font-size: 24px; color: #c4c4c4;">Navigation</span>
            <router-link to="/"> Home </router-link> 
            <router-link to="/games">Games </router-link> 
            <router-link to="/info">Info </router-link> 
            <router-link to="/contact">Contact</router-link>
					</p>
				
					<p class="footer-links-support">
						<span style="font-size: 24px; color: #c4c4c4;">Support</span>
            <router-link to="/faq">FAQ</router-link> 
            <router-link to="/help">Get Help</router-link> 
            <router-link to="/suggestions">Suggestions</router-link> 
            <router-link to="/bugs">Report A Bug</router-link>
					</p>
				</div>

				<p class="footer-company-name">Heracles Games &copy; 2019</p>
			</div>

			<div class="footer-center">

				<div>
					<i class="fa fa-map-marker"></i>
					<p><span>5129 E Fernwood Ct</span> Cave Creek, Arizona</p>
				</div>

				<div>
					<i class="fa fa-phone"></i>
					<p>+1 509 8579</p>
				</div>

				<div>
					<i class="fa fa-envelope"></i>
					<p><a href="mailto:games.heracles@gmail.com">games.heracles@gmail.com</a></p>
				</div>

			</div>

			<div class="footer-right">

				<p class="footer-company-about">
					<span>About Heracles Games</span>
					<b>Heracles Games</b> was officially started May 23rd, 2018
				</p>

				<div class="footer-icons">

					<a href="#"><i class="fab fa-instagram"></i></a>
					<a href="#"><i class="fab fa-twitter"></i></a>

				</div>

			</div>

		</footer>
  </div>
</template>

<style lang="scss">
  body {
    margin: 0;
    padding: 0;
    background-color: #fff;
		
    overflow-y : auto;
  }

  #nav {
    padding: 15px;
    padding-left: 10px;
    font: bold 24px sans-serif;
    background-color: #292c2f;
  }

  #nav .logo {
    float: left;
  }

  a {
    text-decoration: none;
    list-style: none;
    color: #fff;
	  padding: 5px;
  }

  a:hover {
	color: #c1c1c1;
  }

  .logo {
	  width: auto;
	  height: 30px;
		padding: 0;
		margin: 0;
  }

  .logo-footer {
    width: auto;
    height: 70px;
    padding: 0;
    margin: 0;
  }

  .footer-distributed{
    background-color: #292c2f;
    box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.12);
    box-sizing: border-box;
    width: 100%;
    text-align: left;
    font: bold 16px sans-serif;
    position: fixed;
    bottom: 0;

    padding: 55px 50px;
    padding-top: 35px;
    margin-top: 80px;
}

.footer-distributed .footer-left,
.footer-distributed .footer-center,
.footer-distributed .footer-right{
	display: inline-block;
	vertical-align: top;
}

.footer-distributed .footer-left{
	width: 40%;
}

.footer-distributed h3{
  padding: 0;
	margin: 0;
}


.footer-link-container .footer-links,
.footer-link-container .footer-links-support {
	display: inline-block;
}

.footer-distributed .footer-links{
	color:  #ffffff;
	margin: 20px 0 12px;
	padding-left: 0px;
	padding-right: 15px;
}

.footer-distributed .footer-links-support{
	color:  #ffffff;
	margin: 20px 0 12px;
	padding-left: 15px;
	padding-right: 15px;
}

.footer-distributed .footer-links a{
	display: block;
	line-height: 1.8;
	text-decoration: none;
	color:  inherit;
}

.footer-distributed .footer-links-support a{
	display: block;
	line-height: 1.8;
	text-decoration: none;
	color:  inherit;
}

.footer-distributed .footer-company-name{
	color:  #8f9296;
	font-size: 14px;
	font-weight: normal;
	margin: 0;
}

.footer-distributed .footer-center{
	width: 35%;
}

.footer-distributed .footer-center i{
	background-color:  #33383b;
	color: #ffffff;
	font-size: 25px;
	width: 38px;
	height: 38px;
	border-radius: 50%;
	text-align: center;
	line-height: 42px;
	margin: 10px 15px;
	vertical-align: middle;
}

.footer-distributed .footer-center i.fa-envelope{
	font-size: 17px;
	line-height: 38px;
}

.footer-distributed .footer-center p{
	display: inline-block;
	color: #ffffff;
	vertical-align: middle;
	margin:0;
}

.footer-distributed .footer-center p span{
	display:block;
	font-weight: normal;
	font-size:14px;
	line-height:2;
}

.footer-distributed .footer-center p a{
	color:  #5383d3;
	text-decoration: none;;
}

.footer-distributed .footer-right{
	width: 20%;
}

.footer-distributed .footer-company-about{
	line-height: 20px;
	color:  #92999f;
	font-size: 13px;
	font-weight: normal;
	margin: 0;
}

.footer-distributed .footer-company-about span{
	display: block;
	color:  #ffffff;
	font-size: 14px;
	font-weight: bold;
	margin-bottom: 20px;
}

.footer-distributed .footer-icons{
	margin-top: 25px;
}

.footer-distributed .footer-icons a{
	display: inline-block;
	width: 35px;
	height: 35px;
	cursor: pointer;
	background-color:  #33383b;
	border-radius: 2px;

  font-size: 20px;
  font-weight: 100;
	color: #ffffff;
	text-align: center;
	line-height: 35px;

	margin-right: 3px;
	margin-bottom: 5px;
}


@media (max-width: 880px) {

	.footer-distributed{
		font: bold 14px sans-serif;
	}

	.footer-distributed .footer-left,
	.footer-distributed .footer-center,
	.footer-distributed .footer-right{
		display: block;
		width: 100%;
		margin-bottom: 40px;
		text-align: center;
	}

	.footer-distributed .footer-center i{
		margin-left: 0;
	}

}

</style>
