const moment = require("moment");

export const pagination = (data, page, recordPerPage) => {
  let sendData;
  if (data.length) {
    const pageCount = Math.ceil(data.length / recordPerPage);
    if (!page) {
      page = 1;
    }
    if (page > pageCount) {
      page = pageCount;
    }
    sendData = {
      page: page,
      pageCount: pageCount,
      data: data.slice(
        page * recordPerPage - recordPerPage,
        page * recordPerPage
      ),
    };
  } else {
    sendData = {
      success: false,
      message: "No record found",
    };
  }
  return sendData;
};
