import { MongoClient, ObjectId } from "mongodb"; // See https://www.mongodb.com/docs/drivers/node/current/quick-start/
import { DB_URI } from "$env/static/private"; //Connection String to MongoDB

const client = new MongoClient(DB_URI); //MongoDB Client (Verbindung zu meiner Datenbank)

await client.connect();

const db = client.db("finalproject"); // select database

//////////////////////////////////////////
// Artists
//////////////////////////////////////////

// Get all artists
async function getArtists() {
  let artists = [];
  try {
    const collection = db.collection("artists");

    const query = {};

    // Get all objects that match the query
    artists = await collection.find(query).toArray();
    artists.forEach((artist) => {
      artist._id = artist._id.toString(); // convert ObjectId to String
    });
  } catch (error) {
    // TODO: errorhandling
  }
  return artists;
}

// Get artist by id
async function getArtist(id) {
  let artist = null;
  try {
    const collection = db.collection("artists");

    const query = { _id: new ObjectId(id) }; // filter by id

    artist = await collection.findOne(query);

    if (!artist) {
      console.log("No artist with id " + id);
    }
    artist._id = artist._id.toString(); // convert ObjectId to String
  } catch (error) {
    console.log(error.message); // bspw. keine Verbindung zur DB, damit meine App nicht abstürzt
  }
  return artist;
}

//////////////////////////////////////////
// Festivals
//////////////////////////////////////////

// get all festivals
async function getFestivals() { 
  let festivals = [];
  try {
    const collection = db.collection("festivals");

    const query = {}; // leeres query damit ich alle festivals erhalte

    // Get all objects that match the query, ordered by date ascending
    festivals = await collection.find(query).sort({ date: 1 }).toArray();
    
    festivals.forEach((festival) => {
      festival._id = festival._id.toString(); // convert ObjectId to String
    });
  } catch (error) {

  }
  return festivals;
}

// get festival by id
async function getFestival(id) {
  let festival = null;
  try {
    const collection = db.collection("festivals");
    const query = { _id: new ObjectId(id) }; // filter by id

    festival = await collection.findOne(query);

    if (!festival) {
      console.log("No festival with id " + id);
    }
    festival._id = festival._id.toString(); // convert ObjectId to String
  } catch (error) {
    console.log(error.message);
  }
  return festival;
}

// create festival
async function createFestival(festival) {
  try {
    const collection = db.collection("festivals");
    const result = await collection.insertOne(festival);
    return result.insertedId.toString(); // convert ObjectId to String
  } catch (error) {

  }
  return null;
}

// delete festival by id
async function deleteFestival(id) {
  try {
    const collection = db.collection("festivals");
    const query = { _id: new ObjectId(id) }; // filter by id
    const result = await collection.deleteOne(query);

    if (result.deletedCount === 0) {
      console.log("No object with id " + id);
    } else {
      console.log("Object with id " + id + " has been successfully deleted.");
      return id;
    }
  } catch (error) {
    console.log(error.message);
  }
  return null;
}

// update festival by id
async function updateFestival(id, festival) {
  try {
    const collection = db.collection("festivals");
    const query = { _id: new ObjectId(id) }; // filter by id
    const result = await collection.updateOne(query, { $set: festival });

    if (result.matchedCount === 0) {
      console.log("No object with id " + id);
    } else {
      console.log("Object with id " + id + " has been successfully updated.");
      return id;
    }
  } catch (error) {
    console.log(error.message);
  }
  return null;
}

//////////////////////////////////////////
// Lineups
//////////////////////////////////////////

// Get all artists of a specific festival
async function getArtistsByFestival(festivalId) {
  let artists = [];
  try {
    const collection = db.collection("lineUps");
    
    const query = [
      {
      '$match': {
        'festivalId': new ObjectId(festivalId)
      }
      },
      {
      '$lookup': {
        'from': 'artists',
        'localField': 'artistId',
        'foreignField': '_id',
        'as': 'artistDetails'
      }
      },
      {
      '$unwind': '$artistDetails'
      },
      {
      '$addFields': {
        'lineupInfo': {
          'lineupTime': '$time',
          'stage': '$stage',
        }
      }
      },
      {
      '$replaceRoot': {
        'newRoot': {
          '$mergeObjects': ['$artistDetails', '$lineupInfo']
        }
      }
      }
    ];

    artists = await collection.aggregate(query).toArray();

    artists.forEach((artist) => {
      artist._id = artist._id.toString(); // convert ObjectId to String
    });

    if (artists.length === 0) {
      console.log("No artists found for festival with id " + festivalId);
    }
  } catch (error) {
    console.log(error.message);
  }
  return artists;
}


// Get festivals by artist
async function getFestivalsByArtist(artistId) {
  let festivals = [];
  try {
    const collection = db.collection("lineUps");

    const query = [
      {
        '$match': {
          'artistId': new ObjectId(artistId)
        }
      },
      {
        '$lookup': {
          'from': 'festivals',
          'localField': 'festivalId',
          'foreignField': '_id',
          'as': 'festivalDetails'
        }
      },
      {
        '$unwind': '$festivalDetails'
      },
      {
      '$addFields': {
        'lineupInfo': {
          'lineupTime': '$time',
          'stage': '$stage',
        }
      }
      },      
      {
      '$replaceRoot': {
        'newRoot': {
          '$mergeObjects': ['$festivalDetails', '$lineupInfo']
        }
      }
      }
    ];

    festivals = await collection.aggregate(query).toArray();

    festivals.forEach((festival) => {
      festival._id = festival._id.toString(); // convert ObjectId to String
    });

    if (festivals.length === 0) {
      console.log("No festivals found for artist with id " + artistId);
    }
  } catch (error) {
    console.log(error.message);
  }
  return festivals;
}

// create lineup
async function addArtistToFestival(lineup) {
  try {
    const collection = db.collection("lineUps");

    lineup.artistId = new ObjectId(lineup.artistId); // convert String to ObjectId
    lineup.festivalId = new ObjectId(lineup.festivalId); // convert String to ObjectId

    const result = await collection.insertOne(lineup);
    return result.insertedId.toString(); // convert ObjectId to String
  } catch (error) {

  }
  return null;
}

// export all functions so that they can be used in other files
export default {
  getArtists,
  getArtist,
  getFestivals,
  getFestival,  
  createFestival,
  updateFestival,
  deleteFestival,
  getFestivalsByArtist,
  getArtistsByFestival,
  addArtistToFestival
};
