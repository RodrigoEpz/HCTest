using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HCApiTest.Models.Utils
{
    public class ResponseCRUDMessage
    {
        public ResponseCRUDMessage(bool _status, string _message)
        {
            this.status = _status;
            this.message = _message;
        }
        public bool status { get; set; }
        public string message { get; set; }
    }
}
