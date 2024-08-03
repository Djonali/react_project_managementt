import React from 'react'
import prisma from '@/prisma/client'
import { notFound } from 'next/navigation'
import dynamic from 'next/dynamic';
import IssueFormSkeleton from './loading';

const IssueForm = dynamic(
  () => import('@/app/issues/_components/IssueForm'),
  { 
    ssr: false, 
    loading: () => <IssueFormSkeleton />
  }
)

// interface Props {
//   params: { id: string }
// }

const EditIssuePage = async (props:any) => {
  console.log("ID for Edit ***************", props.params.id)
  const issue = await prisma.issue.findUnique({
    where: { id: parseInt(props.params.id)}
  });

  if (!issue) notFound();
  console.log("Issue to be edited", issue)
  return (
    <IssueForm issue={issue} />
  )
}

export default EditIssuePage