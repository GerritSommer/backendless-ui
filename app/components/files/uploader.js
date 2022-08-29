import Component from '@glimmer/component';
import { service } from '@ember/service';
import { action, get } from '@ember/object';

export default class FilesUploaderComponent extends Component {
  @service fileQueue;
  @service session;
  @service store;

  get userToken() {
    // eslint-disable-next-line ember/no-get
    return get(this.session, 'data.authenticated.userToken');
  }

  get queue() {
    return this.fileQueue.findOrCreate('uploads');
  }

  get fileAdapter() {
    return this.store.adapterFor('file');
  }

  options = {
    timeout: 2500,
    contentType: 'multipart/form-data',
    headers: {
      'user-token': this.userToken,
    },
  };

  @action
  async uploadFile(file) {
    try {
      const { host } = this.fileAdapter;
      const url = `${host}/files/v1/${file.name}?overwrite=true`;
      const response = await file.upload(url);
      const { fileURL } = await response.json();
      console.log(fileURL);
    } catch (error) {
      file.state = 'aborted';
    }
  }
}
