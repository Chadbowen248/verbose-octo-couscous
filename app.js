

	'use strict';

	var App = {
	  clickCounter: 0,
	  quotes: [],
	  getQuote: function getQuote() {
	    var URL = 'https://andruxnet-random-famous-quotes.p.mashape.com/?cat=movies';
	    fetch(URL, {
	      method: 'GET',
	      headers: new Headers({ 'X-Mashape-Key': 'VX2byySRsJmshOGnZtVwLVW1ymWwp143BhvjsnEhKJnBQDcrrb' })
	    }).then(function (response) {
	      return response.json();
	    }).then(function (data) {
	      this.quotes.push(data);
	    }.bind(this));
	  },
	  handleClick: function handleClick() {
	    var targetDiv = document.getElementById('quote');
	    var author = document.getElementById('author');
	    this.getQuote();
	    targetDiv.innerHTML = this.quotes[this.clickCounter].quote;
	    author.innerHTML = '- ' + this.quotes[this.clickCounter].author;
	    this.setupTweet();
	    this.setRandomColors();
	    this.clickCounter++;
	  },
	  getRGBvalue: function getRGBvalue() {
	    return Math.floor(Math.random() * 255) - 100;
	  },
	  setRandomColors: function setRandomColors() {
	    var backgroundColor = document.body;
	    backgroundColor.style.backgroundColor = 'rgb(' + this.getRGBvalue() + ',' + this.getRGBvalue() + ' ,' + this.getRGBvalue() + ')';
	  },
	  setupTweet: function setupTweet() {
	    var content = document.getElementById('quote').innerHTML;
	    var share = document.querySelector('a');
	    share.setAttribute('href', 'https://twitter.com/share?text=' + content);
	  }
	};

	window.onload = App.getQuote();
