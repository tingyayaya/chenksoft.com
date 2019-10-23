const host = window.location.host

let domain = {
  name: 'doc',
  basename: false
};

if(host === 'sites.chenksoft.com') {
  domain = {
    name: window.location.pathname.replace(/\/$/g, '').split('/')[1],
    basename: true
  }
}else if(host === 'localhost:9000'){
  domain.name = 'crm'
}else{
  domain = {
    name: window.location.host.split('.')[0],
    basename: false
  }
}
export default domain