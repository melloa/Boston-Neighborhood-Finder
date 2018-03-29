# SHP TO JSON
import shapefile

names = [
    'Roslindale',
    'Jamaica_Plain',
    'Mission_Hill',
    'Longwood_Medical_Area',
    'Bay_Village',
    'Leather_District',
    'Chinatown',
    'North_End',
    'Roxbury',
    'South_End',
    'Back_Bay',
    'East_Boston',
    'Charlestown',
    'West_End',
    'Beacon_Hill',
    'Downtown',
    'Fenway',
    'Brighton',
    'West_Roxbury',
    'Hyde_Park',
    'Mattapan',
    'Dorchester',
    'South_Boston_Waterfront',
    'South_Boston',
    'Allston',
    'Harbor_Islands'
]

i = 0
filename = "Boston_Neighborhoods"
r = shapefile.Reader("/media/andrew/96862B66862B45D9/Users/Andrew/Downloads/" + filename + ".shp")
sr = r.shapeRecords()
file = open(filename + ".json", "w")
file.write("{\n");

for s in sr:
#if(1):
#    s = sr[0]
    first = True
    file.write("\t\"{}\" : {{\n\t\t\"region\" : [".format(names[i]))
    for p in s.shape.points:
        # {lat: 25.774, lng: -80.190},
        # p = (-71.12592717485386, 42.272013107957406)
        if not first:
            file.write(",")
        file.write("\n\t\t\t{{\"lat\": {}, \"lng\": {}}}".format(p[1], p[0]))
        first = False
    file.write("\n\t\t]\n")
    file.write("\t},\n")
    i = i + 1

file.write("}\n");
file.close()
