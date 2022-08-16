//This function is to call the restaurants api and get all the restaurants
//that is showing in Shaw Theatres for Showing Now and Coming Soon
function getRestaurantData() {
    var request = new XMLHttpRequest();
    request.open('GET', search_url, true);
    //This function will be called when data returns from the web api    
    request.onload = function () {
        //get all the restaurants records into our restaurant array        
        restaurant_array = JSON.parse(request.responseText);
        console.log(restaurant_array) // output to console        
    };

    //This command starts the calling of the restaurants web api    
    request.send();
}

var handleSearch = function(event) {
    event.preventDefault();
    // Get the search terms from the input field
    var searchTerm = event.target.elements['search'].value;
    // Tokenize the search terms and remove empty spaces
    var tokens = searchTerm
                  .toLowerCase()
                  .split(' ')
                  .filter(function(token){
                    return token.trim() !== '';
                  });
   if(tokens.length) {
    //  Create a regular expression of all the search terms
    var searchTermRegex = new RegExp(tokens.join('|'), 'gim');
    var filteredList = books.filter(function(book){
      // Create a string of all object values
      var bookString = '';
      for(var key in book) {
        if(book.hasOwnProperty(key) && book[key] !== '') {
          bookString += book[key].toString().toLowerCase().trim() + ' ';
        }
      }
      // Return book objects where a match with the search regex if found
      return bookString.match(searchTermRegex);
    });
    // Render the search results
    render(filteredList);
   }
  };
