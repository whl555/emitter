export class HollyEmitter {

  emit(event: string, data: any) {
    console.log(event, data);
  }

  on(event: string, callback: (data: any) => void) {
    console.log(event, callback);
  }

  off(event: string, callback: (data: any) => void) {
    console.log(event, callback);
  }
}