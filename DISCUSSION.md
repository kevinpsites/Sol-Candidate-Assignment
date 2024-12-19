# Next Steps I would do

Unfortunately I ran out of time, below are some of the additional enhancements I would make for both the Frontend and Backend.

## Backend

1. Update data extraction methods to be pulled from the database and not results (for time I only used the given dataset and did not setup a DB which is why I went the route I did)
   1. Additionally I would probably separate out this data into its own endpoint depending on its size but it was useful for filtering.
1. Update GET call to accept query attributes to use those on searching criteria.
   1. Rather than handle a lot of search on the frontend I would instead prefer to handle searching through large datasets on the backend using the power of the DB and SQL. I would pass in attributes to filter or search by and then return the list to the frontend.
   1. I would also add pagination to the search results depending on the size so that it not overwheleming. You can passing in a current page key as a query attribute for a starting point for the next slice of results. Or you could setup a type of endlesss scrolling so the frontend will automatically pull the next page.

## Frontend

1. I would install and use a more robust fetch package such as React-Query so that I can better update the UI with loading vs. not and refetching based on search criteria.
1. I would enhance the search bar to be more intelligent and similar to the AWS lambda search bar where you can specify what field you are searching by (I prefer search to a filter drop down).
1. As mentioned above I would move more of the search heavy lifting to the backend.

## Additional Context on Searching on the Backend vs Frontend

1. Ultimately I would speak with the product team to determine what sort of experience we are going for with our customer in their search and determine if efficiency in search on the backend at the cost of potentially slower network response is worth it over loading more data on the frontend and handling the search there.
