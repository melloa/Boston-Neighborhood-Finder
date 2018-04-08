from pprint import pprint
from yelpapi import YelpAPI
import time

api = 'rYHdMPnblq88R0HPeVk9dVHa2zzKroyqVAdk8hHOaj4ZT3CFlW1WCafan23YuWGHE2LpBXLGYYgLiIoZuHRLx-6mpkFP2TZX8UaceETRC9nCW2d1b1eKrBmCMjDKWnYx';
yelp_api = YelpAPI(api)

neighborhoods = [
    'Allston',
    'Back Bay',
    'Bay Village',
    'Beacon Hill',
    'Brighton',
    'Charlestown',
    'Chinatown',
    'Dorchester',
    'Downtown',
    'East Boston',
    'Fenway',
    'Harbor Islands',
    'Hyde Park',
    'Jamaica Plain',
    'Leather District',
    'Longwood Medical Area',
    'Mattapan',
    'Mission Hill',
    'North End',
    'Roslindale',
    'Roxbury',
    'South Boston',
    'South Boston Waterfront',
    'South End',
    'West End',
    'West Roxbury'
]

entries = {}

for n in neighborhoods:
#n = neighborhoods[0]
    entries[n] = {}
    loc = n + ', Boston, MA'
    response = yelp_api.search_query(categories='publictransport', radius=500, location=loc, limit=1)
    value = response['total']
    entries[n]['public_transit'] = value
    time.sleep(.2)


    response = yelp_api.search_query(categories='busstations', radius=500, location=loc, limit=1)
    value = response['total']
    entries[n]['bus'] = value
    time.sleep(.2)

pprint(entries)