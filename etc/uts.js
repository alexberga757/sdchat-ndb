// timeConverter.js

// Hàm chuyển đổi Unix timestamp thành đối tượng JSON
function unixTimestampToJson(unixTimestamp) {
  const date = new Date(unixTimestamp * 1000);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hour = date.getHours();
  const minute = date.getMinutes();
  const second = date.getSeconds();

  return {
    year,
    month,
    day,
    hour,
    minute,
    second,
  };
}

// Hàm chuyển đổi đối tượng JSON thành Unix timestamp
function jsonToUnixTimestamp(jsonObj) {
  const { year, month, day, hour, minute, second } = jsonObj;
  const timestamp = Date.UTC(year, month - 1, day, hour, minute, second) / 1000;
  return timestamp;
}

function convertTimeToJSON(time) {
  const date = new Date(time);

  const year = date.getFullYear();
  const month = date.getMonth() + 1; // Tháng bắt đầu từ 0, cần cộng thêm 1
  const day = date.getDate();
  const hour = date.getHours();
  const minute = date.getMinutes();
  const second = date.getSeconds();

  const jsonObject = {
    year,
    month,
    day,
    hour,
    minute,
    second
  };

  return jsonObject;
}

module.exports = {
  unixTimestampToJson,
  jsonToUnixTimestamp,
  convertTimeToJSON
};
