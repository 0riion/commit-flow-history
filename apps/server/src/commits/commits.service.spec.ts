import { Test, TestingModule } from "@nestjs/testing";
import { CommitsService } from "./commits.service";
import axiosInstance from "../../libs/axiosInstance";


describe('CommitsService', () => {
  let service: CommitsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CommitsService],
    }).compile();

    service = module.get<CommitsService>(CommitsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return commits', async () => {
    const owner = 'owner';
    const repo = 'repo';
    const pageIndex = 1;
    const pageSize = 10;
    const orderBy = 'desc';
    const branch = 'main';

    const expectedUrl = `/repos/${owner}/${repo}/commits?page=${pageIndex}&per_page=${pageSize}&sha=${branch}`;
    const expectedData = [{ sha: '123', message: 'test commit' }];

    jest.spyOn(axiosInstance, 'get').mockResolvedValueOnce({ data: expectedData });

    const result = await service.getCommits(repo, owner, pageIndex, pageSize, orderBy, branch);

    expect(axiosInstance.get).toHaveBeenCalledWith(expectedUrl);
    expect(result).toEqual(expectedData.reverse());
  });
});