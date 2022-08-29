import ApplicationAdapter from './application';

export default class FileAdapter extends ApplicationAdapter {
  buildURL() {
    const url = super.buildURL(...arguments);

    return `${url}/v1`;
  }

  /**
    PUT https://xxxx.backendless.app/api/files/rename
    {
      "oldPathName" : current-name,
      "newName": new-name
    }
   */

  /**
    PUT https://xxxx.backendless.app/api/files/copy
    {
      "sourcePath" : source-path,  // "/documentation/readme.txt\"
      "targetPath": target-path   // "/updated-docs\"
    }
   */

  /**
    PUT https://xxxx.backendless.app/api/files/move
    {
      "sourcePath" : source-path,  // "/documentation/readme.txt\"
      "targetPath": target-path   // "/updated-docs\"
    }
   */
}

/*
  QUERY PATTERN
  pattern=<pattern>&   an optional parameter. A pattern which the returned files and directories must match.
  sub=<recursive>&  an optional parameter. A boolean value of true or false. If present and is true, requests that the listing must be retrieved recursively for all directories contained within
  pagesize=<pagesize>&  an optional parameter. If present, identifies how many items should be returned in the response.
  offset=<offset> an optional parameter. If present, indicates the index of item in the response from which to get the <pagesize> items.
*/
