const axios = require("axios");

class AtlanticPedia {
  /**
   * @param {string} apiKey - API Key Anda
   **/
  constructor(apiKey) {
    this._apiKey = apiKey;
    this._endpoint = "https://atlantich2h.com";
  }

  // Profile
  async getProfile() {
    try {
      const params = new URLSearchParams();
      params.append("api_key", this._apiKey);

      const response = await axios.post(
        `${this._endpoint}/get_profile`,
        params.toString(),
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );
      return response.data;
    } catch (error) {
      throw { error: error.message };
    }
  }

  // Transaksi
  async createTransaction(code, refId, target) {
    try {
      const params = new URLSearchParams();
      params.append("api_key", this._apiKey);
      params.append("code", code);
      params.append("reff_id", refId);
      params.append("target", target);

      const response = await axios.post(
        `${this._endpoint}/transaksi/create`,
        params.toString(),
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );
      return response.data;
    } catch (error) {
      throw { error: error.message };
    }
  }

  async checkTransactionStatus(id, type) {
    try {
      const params = new URLSearchParams();
      params.append("api_key", this._apiKey);
      params.append("id", id);
      params.append("type", type);

      const response = await axios.post(
        `${this._endpoint}/transaksi/status`,
        params.toString(),
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );
      return response.data;
    } catch (error) {
      throw { error: error.message };
    }
  }

  async getPriceList(type, code = null) {
    try {
      const params = new URLSearchParams();
      params.append("api_key", this._apiKey);
      params.append("type", type);
      if (code) {
        params.append("code", code);
      }

      const response = await axios.post(
        `${this._endpoint}/layanan/price_list`,
        params.toString(),
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );
      return response.data;
    } catch (error) {
      throw { error: error.message };
    }
  }

  // Deposit
  async createDeposit(reffId, nominal, type, method) {
    try {
      const params = new URLSearchParams();
      params.append("api_key", this._apiKey);
      params.append("reff_id", reffId);
      params.append("nominal", nominal);
      params.append("type", type);
      params.append("metode", method);

      const response = await axios.post(
        `${this._endpoint}/deposit/create`,
        params.toString(),
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );
      return response.data;
    } catch (error) {
      throw { error: error.message };
    }
  }

  async cancelDeposit(id) {
    try {
      const params = new URLSearchParams();
      params.append("api_key", this._apiKey);
      params.append("id", id);

      const response = await axios.post(
        `${this._endpoint}/deposit/cancel`,
        params.toString(),
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );
      return response.data;
    } catch (error) {
      throw { error: error.message };
    }
  }

  async checkDepositStatus(id) {
    try {
      const params = new URLSearchParams();
      params.append("api_key", this._apiKey);
      params.append("id", id);

      const response = await axios.post(
        `${this._endpoint}/deposit/status`,
        params.toString(),
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );
      return response.data;
    } catch (error) {
      throw { error: error.message };
    }
  }

  async getDepositMethods(type = null, method = null) {
    try {
      const params = new URLSearchParams();
      params.append("api_key", this._apiKey);
      if (type) {
        params.append("type", type);
      }
      if (method) {
        params.append("metode", method);
      }

      const response = await axios.post(
        `${this._endpoint}/deposit/metode`,
        params.toString(),
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );
      return response.data;
    } catch (error) {
      throw { error: error.message };
    }
  }
}

module.exports = AtlanticPedia;
