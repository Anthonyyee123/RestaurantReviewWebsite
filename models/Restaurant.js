"use strict";

class Restaurant {

    constructor(id_restaurant, nameRestaurant, hyperlink, numReviews, averageThumbs, address, openingHours, phone, map, cuisine, price, teaser) 
    {
        this.id_restaurant = id_restaurant;

        this.nameRestaurant = nameRestaurant;

        this.hyperlink = hyperlink;

        this.numReviews = numReviews;

        this.averageThumbs = averageThumbs;

        this.address = address;

        this.openingHours = openingHours;

        this.phone = phone;

        this.map = map;

        this.cuisine = cuisine;

        this.price = price;

        this.teaser = teaser;
    }


    getId_Restaurant() 
    {
        return this.id_restaurant;
    }

    getNameRestaurant() 
    {
        return this.nameRestaurant;
    }

    getHyperlink() 
    {
        return this.hyperlink;
    }

    getNumReviews() 
    {
        return this.numReviews;
    }

    getAverageThumbs() 
    {
        return this.averageThumbs;
    }

    getAddress()
    {
        return this.address;
    }

    getOpeningHours()
    {
        return this.openingHours;
    }

    getPhone()
    {
        return this.phone;
    }

    getMap()
    {
        return this.map;
    }

    getCuisine()
    {
        return this.cuisine;
    }

    getPrice()
    {
        return this.price;
    }

    getTeaser()
    {
        return this.teaser;
    }



    setNameRestaurant(nameRestaurant) 
    {
        this.nameRestaurant = nameRestaurant;
    }

    setHyperlink(hyperlink) 
    {
        this.hyperlink = hyperlink;
    }

    setNumReviews(numReviews) 
    {
        this.numReviews = numReviews;
    }

    setAverageThumbs(averageThumbs) 
    {
        this.averageThumbs = averageThumbs; 
    }

    setAddress(address)
    {
        this.address = address; 
    }

    setOpeningHours(openingHours)
    {
        this.openingHours = openingHours; 
    }

    setPhone(phone)
    {
        this.phone = phone; 
    }

    setMap(map)
    {
        this.map = map; 
    }

    setCuisine(cuisine)
    {
        this.cuisine = cuisine; 
    }

    setPrice(price)
    {
        this.price = price; 
    }

    setTeaser(teaser)
    {
        this.teaser = teaser; 
    }

}

module.exports = Restaurant;