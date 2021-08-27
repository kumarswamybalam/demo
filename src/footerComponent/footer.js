import React from "react";
import './footer.css';

function Footer() {
  return (
    <div class="footer">
      <footer>
		    <div class="container">
			    <div class="units-row">
			      <div class="unit-50">
			    	  <p>Kumar Swamy Balam</p>
			      </div>
			      <div class="unit-50">
					    <ul class="social list-flat right">
						  <li><a href="mailto:kumarswamybalam@gmail.com" target="_blank"><i class="fa fa-send"></i></a></li>
						  <li><a href="https://twitter.com/swamy_balam" target="_blank"><i class="fa fa-twitter"></i></a></li>
						  <li><a href="https://www.instagram.com/iamjustkumar/" target="_blank"><i class="fa fa-instagram"></i></a></li>
						  <li><a href="https://www.facebook.com/profile.php?id=100018198257442" target="_blank"><i class="fa fa-facebook"></i></a></li>
					    </ul>
			      </div>
			    </div>
		    </div>
	    </footer>
    </div>
  );
}

export default Footer;