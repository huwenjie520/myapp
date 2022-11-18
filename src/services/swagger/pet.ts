// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** Update an existing pet PUT /pet */
export async function updatePet(body: API.Pet, options?: { [key: string]: any }) {
  return request<any>('/pet', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

// git安装
// git配置提交的用户名和邮箱
// git config --global user.name  "hwj"
// git config --global user.emal  "768571442@qq.com"
// git commit
// 配置git SSH表示是你的账户，不用登录
// 在git中新建仓库


// git命令
// git可视化操作
// git init 会创建一个.git文件夹 是隐藏的文件夹
// git add .
// git commmit -m '' . fix简单修改 feat增加功能
// 本地新建分支：git checkout -b 分支名
// 切换分支：git checkout 分支名
// master main dev分支
// push之前pull下来，查看冲突，再push 
// 查看本地分支：git branch
// 查看所有分支（包括远程）：git branch -a
// git clone git地址
// 第一次提交：
// 添加远程仓库地址：git remote add origin git地址
// 远程创建新的分支：git push --set-upstream origin dev
// 提交至远程master分支：git push -u origin dev
// 第二次提交，并且远程有分支的话，直接git push
// 先本地有test分支 使用--set-upstream创建一个同名的分支 然后再add commit push

// services:请求http

// react props
// git + ts + react hooks(usestate\useeffect\useref\usememo)
// react class
// vscode中使用git

/** Add a new pet to the store POST /pet */
export async function addPet(body: API.Pet, options?: { [key: string]: any }) {
  return request<any>('/pet', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** Find pet by ID Returns a single pet GET /pet/${param0} */
export async function getPetById(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getPetByIdParams,
  options?: { [key: string]: any },
) {
  const { petId: param0, ...queryParams } = params;
  return request<API.Pet>(`/pet/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** Updates a pet in the store with form data POST /pet/${param0} */
export async function updatePetWithForm(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.updatePetWithFormParams,
  body: { name?: string; status?: string },
  options?: { [key: string]: any },
) {
  const { petId: param0, ...queryParams } = params;
  const formData = new FormData();

  Object.keys(body).forEach((ele) => {
    const item = (body as any)[ele];

    if (item !== undefined && item !== null) {
      formData.append(
        ele,
        typeof item === 'object' && !(item instanceof File) ? JSON.stringify(item) : item,
      );
    }
  });

  return request<any>(`/pet/${param0}`, {
    method: 'POST',
    params: { ...queryParams },
    data: formData,
    ...(options || {}),
  });
}

/** Deletes a pet DELETE /pet/${param0} */
export async function deletePet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.deletePetParams & {
    // header
    api_key?: string;
  },
  options?: { [key: string]: any },
) {
  const { petId: param0, ...queryParams } = params;
  return request<any>(`/pet/${param0}`, {
    method: 'DELETE',
    headers: {},
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** uploads an image POST /pet/${param0}/uploadImage */
export async function uploadFile(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.uploadFileParams,
  body: { additionalMetadata?: string; file?: string },
  file?: File,
  options?: { [key: string]: any },
) {
  const { petId: param0, ...queryParams } = params;
  const formData = new FormData();

  if (file) {
    formData.append('file', file);
  }

  Object.keys(body).forEach((ele) => {
    const item = (body as any)[ele];

    if (item !== undefined && item !== null) {
      formData.append(
        ele,
        typeof item === 'object' && !(item instanceof File) ? JSON.stringify(item) : item,
      );
    }
  });

  return request<API.ApiResponse>(`/pet/${param0}/uploadImage`, {
    method: 'POST',
    params: { ...queryParams },
    data: formData,
    requestType: 'form',
    ...(options || {}),
  });
}

/** Finds Pets by status Multiple status values can be provided with comma separated strings GET /pet/findByStatus */
export async function findPetsByStatus(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.findPetsByStatusParams,
  options?: { [key: string]: any },
) {
  return request<API.Pet[]>('/pet/findByStatus', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** Finds Pets by tags Muliple tags can be provided with comma separated strings. Use         tag1, tag2, tag3 for testing. GET /pet/findByTags */
export async function findPetsByTags(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.findPetsByTagsParams,
  options?: { [key: string]: any },
) {
  return request<API.Pet[]>('/pet/findByTags', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
