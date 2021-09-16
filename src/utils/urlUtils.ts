const replace = (path: string, removeUnit: string, newUit:string) => {
   return path.replace(removeUnit, newUit);
}

export { replace }