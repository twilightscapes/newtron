import fetch from 'node-fetch';
const converter = require('json-2-csv');

export async function handler(event, context) {
    // get all the products in format needed for CSV conversion
    const products = await getAllProducts();

    // convert the json to a CSV format
    const csv = await convertToCSV(products);

    return {
        statusCode: 200,
        body: csv
    };
    
};

async function convertToCSV(jsonData) {

    const csv = await converter.json2csvAsync(jsonData);

    return await csv;

}
async function getAllProducts() {
    // create the final array products will be merged into
    var data = [];
    // starting on page 1
    var pageNum = 1;
    // used to break the loop when we reach the final page
    var moreData = true;
    do {
        // gets the products for the page number
        const products = await getProducts(pageNum);
        // 1. convert the API response to the new format and add to final array
        data = data.concat(mapToCSVModel(products.data));
        // condition check to break loop when we reach final page
        if (pageNum == products.meta.last_page) {
            console.log('setting moreData to false. ' + 'last_page: ' + products.meta.last_page)
            moreData = false;
        }
        // increment the pageNum to get next page
        pageNum++;
    } while (moreData);
    // this should contain all products in new format needed for CSV converter
    return data;
}

function mapToCSVModel(jsonData) {
    // mapping API model to the model that corresponds to the CSV format
    var data = jsonData.map(x => ({
        handle: x.id,
        title: x.name
    }));
    return data;
}

async function getProducts(pageNum) {
    let numItems = 100;
    let url = 'https://api.simongjewelry.com/products?display=' + numItems + '&page=' + pageNum;
    
    console.log(url);
    // JWT Token
    let token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjNkOWM3ZDdiODQ5OTdmMWU0MjcyZjFhMTQ4YzZjZjE1ZjgwZTczNDMwYTgwNWRjM2RmMjNhOWYxNWNlNzk2OWM1ZDU1ZTQ1NDE4MGJjZGFmIn0.eyJhdWQiOiI0IiwianRpIjoiM2Q5YzdkN2I4NDk5N2YxZTQyNzJmMWExNDhjNmNmMTVmODBlNzM0MzBhODA1ZGMzZGYyM2E5ZjE1Y2U3OTY5YzVkNTVlNDU0MTgwYmNkYWYiLCJpYXQiOjE1OTc2NzIwNTIsIm5iZiI6MTU5NzY3MjA1MiwiZXhwIjoxNjI5MjA4MDUyLCJzdWIiOiIyNTkiLCJzY29wZXMiOltdfQ.xcIdcqtHhgHAtUZeOpEsjAaZRDHQHLn5u6UsNhpOsmM8FSlSIpLTIFZWA-ZKB2rYNKkG7GSIVqOLN75LtfxvZ_n9C_NYEOTrxesbAFVT7hmFCJ3kFyEimhkjDaH0z2oHr-YMzeOAAFa2zMowTfFmqIxsA5lMCLqQ_elCs8YLiGlhxxLN7Q2I3ou-P-EfQAXdxCri9UI7E_B9N-dh_darWp30dvbi_4rP04UY4Z0XAIYE501l94LYBGkGNA9OzIKlG0IAJUEawJMqgVomG_6wA-tVm5GUwagXta3MCOoBnb9wreCrnOZbxH-VlNxkUy9r_P-c8OfB50aFD1UX9Ny781WUNzib4SKtsaL3wp1waLAoIM74m2mhx5meTSt3wwJO46zhh5R2I35M-LA_W_FT6HYD2bMxaTbyrUf84ciSLRGDMW36mTQKYABRvZEtJ6bfUiNF4qJaWrl3JRbWL-pW97C7lUERvRNuFkdN7T1uTXYdnoaGkkeDSSFzTiQE1Ln_jE29muywkz4r3-SGqNKGVzO-tjwb1KLxLMBLGauRMhMgmjnVpIrA4xHWYhA5LVhMPGsmaqLLlqsniA4wxLSkNWgnz1Zbsv4-udL_3QEekfuTn9XoUg5IV7mgWsuQcKXdhYZZUd1RSrWYLqEGJMp3VyyQyKFC735uVFdbk71F9ks";
    // need to add the JWT auth headers
    const auth_headers = {
        'Authorization': 'Bearer ' + token, 
        'Content-Type': 'application/json'
    };
    
    let options = { 
        method: "Get",
        headers: auth_headers
    };
    console.log('calling: ' + url)
    // make request to API
    let response
    try {
      response = await fetch(url, options);
      // handle response
    } catch (err) {
        console.log('error occured with fetch: ' + err.message);
        console.log(err);
    }

    return await response.json();
}
