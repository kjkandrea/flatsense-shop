import Client from '@flatsense/client-api';

export default function CreateClientContext(config: Client.Config) {
  const api = Client.buildClient(config);

  console.log(api);

  return ClientContext;
}

function ClientContext() {
  return <div>hello, build done.</div>;
}
