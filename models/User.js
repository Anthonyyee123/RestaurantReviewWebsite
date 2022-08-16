"use strict";

class User {

    constructor(id_user, firstName, lastName, userId, password, gender, mobile, address, unitNo, postalCode, email) 
    {
        this.id_user = id_user;

        this.firstName = firstName;

        this.lastName = lastName;

        this.userId = userId;

        this.password = password;

        this.gender = gender;

        this.mobile = mobile;

        this.address = address;

        this.unitNo = unitNo;

        this.postalCode = postalCode;

        this.email = email;
    }


    getId_User() 
    {
        return this.id_user;
    }

    getFirstName() 
    {
        return this.firstName;
    }

    getLastName() 
    {
        return this.lastName;
    }

    getUserId() 
    {
        return this.userId;
    }

    getPassword() 
    {
        return this.password;
    }

    getGender()
    {
        return this.gender;
    }

    getMobile()
    {
        return this.mobile;
    }

    getAddress()
    {
        return this.address;
    }

    getUnitNo()
    {
        return this.unitNo;
    }

    getPostalCode()
    {
        return this.postalCode;
    }

    getEmail()
    {
        return this.email;
    }


    setFirstName(firstName) 
    {
        this.firstName = firstName;
    }

    setLastName(lastName) 
    {
        this.lastName = lastName;
    }

    setUserId(userId) 
    {
        this.userId = userId;
    }

    setPassword(password) 
    {
        this.password = password; 
    }

    setGender(gender)
    {
        this.gender = gender; 
    }

    setMobile(mobile)
    {
        this.mobile = mobile; 
    }

    setAddress(address)
    {
        this.address = address; 
    }

    setUnitNo(unitNo)
    {
        this.unitNo = unitNo; 
    }

    setPostalCode(postalCode)
    {
        this.postalCode = postalCode; 
    }

    setEmail(email)
    {
        this.email = email; 
    }

}

module.exports = User;