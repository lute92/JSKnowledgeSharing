let getDataByPromises = function(url){
  return new Promise(function(resolve,reject){
    $.ajax({
      type: "GET",
      url : url,
      success: function(data){
        resolve(data);
      },
      error : function(error){
        reject(error);
      }
    });
  });
};
