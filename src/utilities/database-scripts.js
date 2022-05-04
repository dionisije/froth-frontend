// Set correct order value for original
db.tracks.find({Catalogue: "DVDCDR1", Disc: 1}).forEach(doc => {db.tracks.updateOne({_id: doc._id}, {$set: {"Order": 0.01}})})
db.tracks.find({Catalogue: "DVDCDR2", Disc: 1}).forEach(doc => {db.tracks.updateOne({_id: doc._id}, {$set: {"Order": 0.02}})})
db.tracks.find({Catalogue: "DVDCDR3", Disc: 1}).forEach(doc => {db.tracks.updateOne({_id: doc._id}, {$set: {"Order": 0.03}})})
db.tracks.find({Catalogue: "DVDCDR4", Disc: 1}).forEach(doc => {db.tracks.updateOne({_id: doc._id}, {$set: {"Order": 0.04}})})
db.tracks.find({Catalogue: "DVDCDR5", Disc: 1}).forEach(doc => {db.tracks.updateOne({_id: doc._id}, {$set: {"Order": 0.05}})})
db.tracks.find({Catalogue: "DVDCDR6", Disc: 1}).forEach(doc => {db.tracks.updateOne({_id: doc._id}, {$set: {"Order": 0.06}})})
db.tracks.find({Catalogue: "DVDCDR7", Disc: 1}).forEach(doc => {db.tracks.updateOne({_id: doc._id}, {$set: {"Order": 0.071}})})
db.tracks.find({Catalogue: "DVDCDR7", Disc: 2}).forEach(doc => {db.tracks.updateOne({_id: doc._id}, {$set: {"Order": 0.072}})})
db.tracks.find({Catalogue: "DVDCDR8", Disc: 1}).forEach(doc => {db.tracks.updateOne({_id: doc._id}, {$set: {"Order": 0.08}})})
db.tracks.find({Catalogue: "DVDCDR9", Disc: 1}).forEach(doc => {db.tracks.updateOne({_id: doc._id}, {$set: {"Order": 0.09}})})
db.tracks.find({Catalogue: "DVDCDR10", Disc: 1}).forEach(doc => {db.tracks.updateOne({_id: doc._id}, {$set: {"Order": 0.101}})})
db.tracks.find({Catalogue: "DVDCDR10", Disc: 2}).forEach(doc => {db.tracks.updateOne({_id: doc._id}, {$set: {"Order": 0.102}})})
db.tracks.find({Catalogue: "DVDCDR11", Disc: 1}).forEach(doc => {db.tracks.updateOne({_id: doc._id}, {$set: {"Order": 0.11}})})
db.tracks.find({Catalogue: "DVDCDR12", Disc: 1}).forEach(doc => {db.tracks.updateOne({_id: doc._id}, {$set: {"Order": 0.121}})})
db.tracks.find({Catalogue: "DVDCDR12", Disc: 2}).forEach(doc => {db.tracks.updateOne({_id: doc._id}, {$set: {"Order": 0.122}})})
db.tracks.find({Catalogue: "DVDCDR13", Disc: 1}).forEach(doc => {db.tracks.updateOne({_id: doc._id}, {$set: {"Order": 0.131}})})

// Set correct order value for classic single releases
db.tracks.find({Catalogue: "DVDCD1", Disc: 1}).forEach(doc => {db.tracks.updateOne({_id: doc._id}, {$set: {"Order": 1}})})
db.tracks.find({Catalogue: "DVDCD2", Disc: 1}).forEach(doc => {db.tracks.updateOne({_id: doc._id}, {$set: {"Order": 2}})})
db.tracks.find({Catalogue: "DVDCD3", Disc: 1}).forEach(doc => {db.tracks.updateOne({_id: doc._id}, {$set: {"Order": 3}})})
db.tracks.find({Catalogue: "DVDCD4", Disc: 1}).forEach(doc => {db.tracks.updateOne({_id: doc._id}, {$set: {"Order": 4}})})
db.tracks.find({Catalogue: "DVDCD5", Disc: 1}).forEach(doc => {db.tracks.updateOne({_id: doc._id}, {$set: {"Order": 5}})})
db.tracks.find({Catalogue: "DVDCD7", Disc: 1}).forEach(doc => {db.tracks.updateOne({_id: doc._id}, {$set: {"Order": 7}})})
db.tracks.find({Catalogue: "DVDCD8", Disc: 1}).forEach(doc => {db.tracks.updateOne({_id: doc._id}, {$set: {"Order": 8}})})
db.tracks.find({Catalogue: "DVDCD9", Disc: 1}).forEach(doc => {db.tracks.updateOne({_id: doc._id}, {$set: {"Order": 9}})})
db.tracks.find({Catalogue: "DVDCD10", Disc: 1}).forEach(doc => {db.tracks.updateOne({_id: doc._id}, {$set: {"Order": 10}})})
db.tracks.find({Catalogue: "DVDCD11", Disc: 1}).forEach(doc => {db.tracks.updateOne({_id: doc._id}, {$set: {"Order": 11}})})
db.tracks.find({Catalogue: "DVDCD12", Disc: 1}).forEach(doc => {db.tracks.updateOne({_id: doc._id}, {$set: {"Order": 12}})})
db.tracks.find({Catalogue: "DVDCD13", Disc: 1}).forEach(doc => {db.tracks.updateOne({_id: doc._id}, {$set: {"Order": 13}})})
db.tracks.find({Catalogue: "DVDCD15", Disc: 1}).forEach(doc => {db.tracks.updateOne({_id: doc._id}, {$set: {"Order": 15}})})
db.tracks.find({Catalogue: "DVDCD16", Disc: 1}).forEach(doc => {db.tracks.updateOne({_id: doc._id}, {$set: {"Order": 16}})})
db.tracks.find({Catalogue: "DVDCD17", Disc: 1}).forEach(doc => {db.tracks.updateOne({_id: doc._id}, {$set: {"Order": 17}})})
db.tracks.find({Catalogue: "DVDCD19", Disc: 1}).forEach(doc => {db.tracks.updateOne({_id: doc._id}, {$set: {"Order": 19}})})
db.tracks.find({Catalogue: "DVDCD20", Disc: 1}).forEach(doc => {db.tracks.updateOne({_id: doc._id}, {$set: {"Order": 20}})})
db.tracks.find({Catalogue: "DVDCD21", Disc: 1}).forEach(doc => {db.tracks.updateOne({_id: doc._id}, {$set: {"Order": 21}})})
db.tracks.find({Catalogue: "DVDCD22", Disc: 1}).forEach(doc => {db.tracks.updateOne({_id: doc._id}, {$set: {"Order": 22}})})
db.tracks.find({Catalogue: "DVDCD23", Disc: 1}).forEach(doc => {db.tracks.updateOne({_id: doc._id}, {$set: {"Order": 23}})})
db.tracks.find({Catalogue: "DVDCD24", Disc: 1}).forEach(doc => {db.tracks.updateOne({_id: doc._id}, {$set: {"Order": 24}})})
db.tracks.find({Catalogue: "DVDCD28", Disc: 1}).forEach(doc => {db.tracks.updateOne({_id: doc._id}, {$set: {"Order": 28}})})
db.tracks.find({Catalogue: "DVDCD29", Disc: 1}).forEach(doc => {db.tracks.updateOne({_id: doc._id}, {$set: {"Order": 29}})})
db.tracks.find({Catalogue: "DVDCD30", Disc: 1}).forEach(doc => {db.tracks.updateOne({_id: doc._id}, {$set: {"Order": 30}})})
db.tracks.find({Catalogue: "DVDCD31", Disc: 1}).forEach(doc => {db.tracks.updateOne({_id: doc._id}, {$set: {"Order": 31}})})
db.tracks.find({Catalogue: "DVDCD32", Disc: 1}).forEach(doc => {db.tracks.updateOne({_id: doc._id}, {$set: {"Order": 32}})})
db.tracks.find({Catalogue: "DVDCD33", Disc: 1}).forEach(doc => {db.tracks.updateOne({_id: doc._id}, {$set: {"Order": 33}})})
db.tracks.find({Catalogue: "DVDCD34", Disc: 1}).forEach(doc => {db.tracks.updateOne({_id: doc._id}, {$set: {"Order": 34}})})
db.tracks.find({Catalogue: "DVDCD35", Disc: 1}).forEach(doc => {db.tracks.updateOne({_id: doc._id}, {$set: {"Order": 35}})})
db.tracks.find({Catalogue: "DVDCD37", Disc: 1}).forEach(doc => {db.tracks.updateOne({_id: doc._id}, {$set: {"Order": 37}})})
db.tracks.find({Catalogue: "DVDCD38", Disc: 1}).forEach(doc => {db.tracks.updateOne({_id: doc._id}, {$set: {"Order": 38}})})
db.tracks.find({Catalogue: "DVDCD39", Disc: 1}).forEach(doc => {db.tracks.updateOne({_id: doc._id}, {$set: {"Order": 39}})})
db.tracks.find({Catalogue: "DVDCD40", Disc: 1}).forEach(doc => {db.tracks.updateOne({_id: doc._id}, {$set: {"Order": 40}})})
db.tracks.find({Catalogue: "DVDCD41", Disc: 1}).forEach(doc => {db.tracks.updateOne({_id: doc._id}, {$set: {"Order": 41}})})
db.tracks.find({Catalogue: "DVDCD43", Disc: 1}).forEach(doc => {db.tracks.updateOne({_id: doc._id}, {$set: {"Order": 43}})})

// Set correct order value for original multi-disc releases
db.tracks.find({Catalogue: "DVDCD6", Disc: 1}).forEach(doc => {db.tracks.updateOne({_id: doc._id}, {$set: {"Order": 6.1}})})
db.tracks.find({Catalogue: "DVDCD6", Disc: 2}).forEach(doc => {db.tracks.updateOne({_id: doc._id}, {$set: {"Order": 6.2}})})
db.tracks.find({Catalogue: "DVDCD14", Disc: 1}).forEach(doc => {db.tracks.updateOne({_id: doc._id}, {$set: {"Order": 14.1}})})
db.tracks.find({Catalogue: "DVDCD14", Disc: 2}).forEach(doc => {db.tracks.updateOne({_id: doc._id}, {$set: {"Order": 14.2}})})
db.tracks.find({Catalogue: "DVDCD18", Disc: 1}).forEach(doc => {db.tracks.updateOne({_id: doc._id}, {$set: {"Order": 18.1}})})
db.tracks.find({Catalogue: "DVDCD18", Disc: 2}).forEach(doc => {db.tracks.updateOne({_id: doc._id}, {$set: {"Order": 18.2}})})
db.tracks.find({Catalogue: "DVDCD25", Disc: 1}).forEach(doc => {db.tracks.updateOne({_id: doc._id}, {$set: {"Order": 25.1}})})
db.tracks.find({Catalogue: "DVDCD25", Disc: 2}).forEach(doc => {db.tracks.updateOne({_id: doc._id}, {$set: {"Order": 25.2}})})
db.tracks.find({Catalogue: "DVDCD26", Disc: 1}).forEach(doc => {db.tracks.updateOne({_id: doc._id}, {$set: {"Order": 26.1}})})
db.tracks.find({Catalogue: "DVDCD26", Disc: 2}).forEach(doc => {db.tracks.updateOne({_id: doc._id}, {$set: {"Order": 26.2}})})
db.tracks.find({Catalogue: "DVDCD27", Disc: 1}).forEach(doc => {db.tracks.updateOne({_id: doc._id}, {$set: {"Order": 27.1}})})
db.tracks.find({Catalogue: "DVDCD27", Disc: 2}).forEach(doc => {db.tracks.updateOne({_id: doc._id}, {$set: {"Order": 27.2}})})
db.tracks.find({Catalogue: "DVDCD36", Disc: 1}).forEach(doc => {db.tracks.updateOne({_id: doc._id}, {$set: {"Order": 36.1}})})
db.tracks.find({Catalogue: "DVDCD36", Disc: 2}).forEach(doc => {db.tracks.updateOne({_id: doc._id}, {$set: {"Order": 36.2}})})
db.tracks.find({Catalogue: "DVDCD42", Disc: 1}).forEach(doc => {db.tracks.updateOne({_id: doc._id}, {$set: {"Order": 42.1}})})
db.tracks.find({Catalogue: "DVDCD42", Disc: 2}).forEach(doc => {db.tracks.updateOne({_id: doc._id}, {$set: {"Order": 42.2}})})
db.tracks.find({Catalogue: "DVDCD44", Disc: 1}).forEach(doc => {db.tracks.updateOne({_id: doc._id}, {$set: {"Order": 44.1}})})
db.tracks.find({Catalogue: "DVDCD44", Disc: 2}).forEach(doc => {db.tracks.updateOne({_id: doc._id}, {$set: {"Order": 44.2}})})
db.tracks.find({Catalogue: "DVDCD44", Disc: 3}).forEach(doc => {db.tracks.updateOne({_id: doc._id}, {$set: {"Order": 44.3}})})
db.tracks.find({Catalogue: "DVDCD44", Disc: 4}).forEach(doc => {db.tracks.updateOne({_id: doc._id}, {$set: {"Order": 44.4}})})

// Convert number represented as a string to an integer
db.tracks.find().forEach( d => {d.Disc = parseInt(d.Disc); db.tracks.updateOne({_id: d._id}, {$set: {"Disc": d.Disc}});})
db.tracks.find().forEach( d => {d.Time = parseInt(d.Time); db.tracks.updateOne({_id: d._id}, {$set: {"Time": d.Time}});})
db.tracks.find().forEach( d => {d.Track = parseInt(d.Track); db.tracks.updateOne({_id: d._id}, {$set: {"Track": d.Track}});})
db.tracks.find().forEach( d => {d.Year = parseInt(d.Year); db.tracks.updateOne({_id: d._id}, {$set: {"Year": d.Year}});})
db.tracks.find().forEach( d => {d["Disc Count"] = parseInt(d["Disc Count"]); db.tracks.updateOne({_id: d._id}, {$set: {"Disc Count": d["Disc Count"]}});})
db.tracks.find().forEach( d => {d["Track Count"] = parseInt(d["Track Count"]); db.tracks.updateOne({_id: d._id}, {$set: {"Track Count": d["Track Count"]}});})
