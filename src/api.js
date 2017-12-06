const APIURL = '/api/groups/'

export async function getGroups(){
  return fetch(APIURL)
  .then(res => {
    if(!res.ok){
      if(res.status >= 400 && res.status < 500){
        return res.json().then(data => {
          let err = {errorMessage: data.message}
          throw err
        })
      } else {
        let err = {errorMessage: 'Please try again later, server is not responding.'}
        throw err
      }
    }
    return res.json()
})
}
