let getData = function(url, callback, errorcallback){
  $.ajax({
    type: "GET",
    url : url,
    success: function(data){
      callback(data);
    },
    error : function(error){
      errorcallback(error);
    }
  });
};
