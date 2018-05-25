import { store } from '../Setup';
import Config from '../config/AppSetting';

const checkIfErrorOccurs = res => {
  return {
    code: res.status,
    res,
  };
};

const TIME_OUT = 30000;

async function xfetch(path, headerOptions, ops = { noParse: false }) {
  const normalFetch = fetch(path, headerOptions);
  if (ops.noParse) {
    return timeoutPromise(TIME_OUT, normalFetch);
  }
  const res = await timeoutPromise(
    TIME_OUT,
    normalFetch.then(checkIfErrorOccurs),
  );

  if (res.code < 300) {
    const response = await res.res.json();
    return response;
  }
  try {
    const response = await res.res.json();
    throw new Error({
      code: res.code,
      message: response.Message,
    });
  } catch (e) {
    if (res.code === 426) {
      throw new Error({
        code: res.code,
        message:
          'We have had some significant upgrades for the app. Please click below to upgrade your app!',
      });
    } else {
      throw new Error({
        code: res.code,
        message: e.message ? e.message : 'Something wrong. Please try again.',
      });
    }
  }
}

export const timeoutPromise = function timeoutPromise(ms, promise) {
  return new Promise((resolve, reject) => {
    const timeoutId = setTimeout(() => {
      reject(new Error('Request time out! Please try again.'));
    }, ms);
    promise.then(
      res => {
        clearTimeout(timeoutId);
        resolve(res);
      },
      err => {
        clearTimeout(timeoutId);
        reject(err);
      },
    );
  });
};

export default xfetch;

function requestWrapper(method) {
  return async (url, data = null, params = {}) => {
    url = Config.BASE_URL + url;
    if (method === 'GET') {
      // is it a GET?
      // GET doesn't have data
      params = data;
      if (params !== null) {
        url = `${url}?${getQueryString(params)}`;
      }
      data = null;
    } else if (data === Object(data)) {
      // (data === Object(data)) === _.isObject(data)
      data = JSON.stringify(data);
    }

    // default params for fetch = method + (Content-Type)
    const defaults = {
      method,
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
      },
    };

    // check that req url is relative and request was sent to our domain
    let token = null;
    if (store) {
      token = store.getState().user.access_token;
    }
    if (token) {
      defaults.headers.Authorization = `Bearer ${token}`;
    }

    // defaults.headers.Platform = Platform.OS === 'ios' ? 'ios' : 'android';
    // defaults.headers.VersionNo = '1.0.350';

    if (data) {
      defaults.body = data;
    }

    const paramsObj = {
      ...defaults,
      headers: { ...params, ...defaults.headers },
    };
    console.log(url);
    console.log(paramsObj);
    return xfetch(url, paramsObj);
  };
}

function getQueryString(params) {
  const esc = encodeURIComponent;
  return Object.keys(params)
    .map(k => `${esc(k)}=${esc(params[k])}`)
    .join('&');
}

export const get = requestWrapper('GET');
export const post = requestWrapper('POST');
export const put = requestWrapper('PUT');
export const patch = requestWrapper('PATCH');
export const del = requestWrapper('DELETE');
