# Parcels Delivery System

Parcels Delivery Service consists of the backend and a dashboard for the senders that will allow them to create parcels and a dashboard for the bikers that will allow them to pick and deliver the parcels.

## Description

- A sender should be able to create a parcel to be delivered by specifying pick-up and drop-off address (should be just a text field, no need for address validation)
- A sender should be able to see the status of his parcels.
- A biker should be able to see a list of the parcels.
- A biker should be able to pick up a parcel.
- Once a parcel is picked up by a biker, it cannot be picked up by other bikers.
- A biker should be able to input the timestamp of the pickup and the delivery for each order.
- The status of the order should be updated for the sender

## Installation

- Clone the project and cd into it
- docker-compose up --build

The backend will be running at http://localhost:8080/api

The sender client will be running at http://localhost:3000

The biker client will be running at http://localhost:3001

For the senders login info:

email: sender1@gmail.com, sender2@gmail.com, sender3@gmail.com, sender4@gmail.com or sender5@gmail.com
password: 123456

For the bikers login info:

email: biker1@gmail.com, biker2@gmail.com, biker3@gmail.com, biker4@gmail.com, biker5@gmail.com, biker6@gmail.com, biker7@gmail.com, biker8@gmail.com, biker9@gmail.com or biker10@gmail.com

password: 123456
