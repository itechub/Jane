from rest_framework import status
from rest_framework.generics import GenericAPIView
from rest_framework.renderers import JSONRenderer, BrowsableAPIRenderer
from rest_framework.permissions import (
    IsAuthenticated,
    IsAuthenticatedOrReadOnly,
)

from config import errors
from utils.common import StructuredResponse
from utils.decorators import exception_handler_wrapper
from .models import Resource
from .serializers import ResourceSerializer


class ResourceList(GenericAPIView):
    """
    Getting resource list or adding a new resource
    """

    permission_classes = (IsAuthenticated,)
    renderer_classes = (JSONRenderer, BrowsableAPIRenderer)
    serializer_class = ResourceSerializer

    def get(self, request, format=None):
        resources = Resource.objects.filter(owner=request.user)
        serializer = ResourceSerializer(resources, many=True)
        return StructuredResponse(serializer.data, status.HTTP_200_OK)

    @exception_handler_wrapper
    def post(self, request, format=None):
        serializer = ResourceSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(owner=request.user)
            return StructuredResponse(serializer.data, status.HTTP_201_CREATED)
        else:
            return StructuredResponse(
                None,
                status.HTTP_400_BAD_REQUEST,
                errors.INVALID_INPUT_4001,
                serializer.errors,
            )
